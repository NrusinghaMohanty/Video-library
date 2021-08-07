import {createContext,useContext,useReducer,useEffect} from "react"
import likevideoHandler from "../Reducer/likevideoReducer"
import axios from "axios"


export const LikevideoContext = createContext()

export function useLikevideo () {
    return useContext(LikevideoContext)
}

export function LikevideoProvider({children}){
    const [ state,likeVideodispatch ] = useReducer(likevideoHandler,{videoInlikevideo:[]})

    useEffect(() => {
        (async () => {
            const { likeVideos: data } = await axios
                .get("https://videolibrary.nrusingha.repl.co/likevideo")
                .then((response) => {
                    return response.data;
                });
            console.log(data)
            likeVideodispatch({ type: "fetch", payload: data });
        })();
    }, []);

    return (
        <LikevideoContext.Provider value={{likeVideodispatch ,videoInlikevideo:state.videoInlikevideo}}>
            {children}
        </LikevideoContext.Provider>
    )
}