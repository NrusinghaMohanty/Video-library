import {createContext,useContext,useReducer,useEffect} from "react"
import historyHandler from "../Reducer/historyReducer"
import axios from "axios"


export const HistoryContext = createContext()

export function useHistory () {
    return useContext(HistoryContext)
}

export function HistoryProvider({children}){
    const [ state,historydispatch ] = useReducer(historyHandler,{videoInhistory:[]})

    useEffect(() => {
        (async () => {
            const { success, history: data } = await axios
                .get("https://videolibrary.nrusingha.repl.co/history")
                .then((response) => {
                    return response.data;
                });

            historydispatch({ type: "fetch", payload: data });
        })();
    }, []);

    return (
        <HistoryContext.Provider value={{historydispatch,videoInhistory:state.videoInhistory}}>
            {children}
        </HistoryContext.Provider>
    )
}