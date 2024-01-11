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


/** Debugging code */
// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch({
//     type: 'song/addSong',
//     payload: 'New Song!!!'
// });

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));