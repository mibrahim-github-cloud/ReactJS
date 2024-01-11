import { configureStore, createSlice } from "@reduxjs/toolkit";

/**
 * Slice => creates the action and intialState and (mini reducers function into the big reducer)
 */
const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action){
            state.push(action.payload);
        },
        removeSong(state, action){
            //
        }
    }
});


const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
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

export { store };