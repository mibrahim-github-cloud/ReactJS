import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./slice/moviesSlice";
import { songsReducer } from "./slice/songsSlice";
import { reset } from "./action";
import { addMovie, removeMovie } from "./slice/moviesSlice";
import { addSong, removeSong } from "./slice/songsSlice";

const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer
    }
});

export { store, addMovie, removeMovie, addSong, removeSong, reset };
