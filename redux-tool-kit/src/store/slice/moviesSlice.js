import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../action";

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action){
            state.push(action.payload);
        },
        removeMovie(state, action){
           const index = state.indexOf(action.payload);
           state.splice(index, 1);
        }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) =>{
            return [];
        })
    }
});


/** Action creators */
//console.log(songsSlice.actions.addSong("Somed Songs"));

/** Debugging code */
// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

//  store.dispatch(songsSlice.actions.addSong("Some songs!!!"));

//  const finalState = store.getState();
//  console.log(JSON.stringify(finalState));

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;