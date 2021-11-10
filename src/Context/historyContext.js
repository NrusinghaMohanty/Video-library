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
                .get("https://shoptube-backend.herokuapp.com/history")
                .then((response) => {
                    return response.data;
                });
            if(success){
             historydispatch({ type: "fetch", payload: data });
            }
            else{
              console.log("error")
            }
        })();
    }, []);

    return (
        <HistoryContext.Provider value={{historydispatch,videoInhistory:state.videoInhistory}}>
            {children}
        </HistoryContext.Provider>
    )
}