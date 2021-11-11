import { createContext } from "react";
import React from "react";
import { useContext, useReducer } from "react";
// import axios from "axios";
import videoReducer from "../Reducer/reducer";
export const VideoContext = createContext();

export function useVideo() {
    return useContext(VideoContext);
}

export const VideoProvider = ({ children }) => {
    const [state, videodispatch] = useReducer(videoReducer, {
        videos: []
    });

    return (
        <VideoContext.Provider value={{ videos: state.videos, videodispatch}}>
            {children}
        </VideoContext.Provider>
    );
};


