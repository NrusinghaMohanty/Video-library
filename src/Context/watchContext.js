import {createContext,useContext,useReducer,useEffect} from "react"
import watchLaterHandler from "../Reducer/watchLaterReducer"
import axios from "axios"


export const WatchLaterContext = createContext()

export function useWatchLater () {
    return useContext(WatchLaterContext)
}

export function WatchLaterProvider({children}){
    const [ state,watchLaterdispatch ] = useReducer(watchLaterHandler,{videoInwatchLater:[]})

    useEffect(() => {
        (async () => {
            const { watchLatervideos: data } = await axios
                .get("https://shoptube-backend.herokuapp.com/watchlater")
                .then((response) => {
                    return response.data;
                });

            watchLaterdispatch({ type: "fetch", payload: data });
        })();
    }, []);

    return (
        <WatchLaterContext.Provider value={{watchLaterdispatch ,videoInwatchLater:state.videoInwatchLater}}>
            {children}
        </WatchLaterContext.Provider>
    )
}