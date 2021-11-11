import {createContext,useContext,useReducer} from "react"
import historyHandler from "../Reducer/historyReducer"
// import axios from "axios"


export const HistoryContext = createContext()

export function useHistory () {
    return useContext(HistoryContext)
}

export function HistoryProvider({children}){
    const [ state,historydispatch ] = useReducer(historyHandler,{videoInhistory:[]})

    return (
        <HistoryContext.Provider value={{historydispatch,videoInhistory:state.videoInhistory}}>
            {children}
        </HistoryContext.Provider>
    )
}