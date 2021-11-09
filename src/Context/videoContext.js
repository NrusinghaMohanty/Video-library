import { createContext } from "react";
import React from "react";
import { useContext, useReducer, useEffect } from "react";
import axios from "axios";
import videoReducer from "../Reducer/reducer";
export const VideoContext = createContext();

export function useVideo() {
    return useContext(VideoContext);
}

export const VideoProvider = ({ children }) => {
    const [state, videodispatch] = useReducer(videoReducer, {
        videos: []
    });
    useEffect(() => {
        (async () => {
            const { videos: data } = await axios
                .get("https://shoptube-backend.herokuapp.com/videos")
                .then((response) => {
                    return response.data;
                });
              console.log("coming......")  
            videodispatch({ type: "fetch", payload: data });
        })();
    }, []);

    return (
        <VideoContext.Provider value={{ videos: state.videos, videodispatch}}>
            {children}
        </VideoContext.Provider>
    );
};


