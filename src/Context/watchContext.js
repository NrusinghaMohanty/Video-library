import {createContext,useContext,useReducer} from "react"
import watchLaterHandler from "../Reducer/watchLaterReducer"
// import axios from "axios"


export const WatchLaterContext = createContext()

export function useWatchLater () {
    return useContext(WatchLaterContext)
}

export function WatchLaterProvider({children}){
    const [ state,watchLaterdispatch ] = useReducer(watchLaterHandler,{videoInwatchLater:[]})

    return (
        <WatchLaterContext.Provider value={{watchLaterdispatch ,videoInwatchLater:state.videoInwatchLater}}>
            {children}
        </WatchLaterContext.Provider>
    )
}