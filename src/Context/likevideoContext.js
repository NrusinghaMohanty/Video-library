import {createContext,useContext,useReducer} from "react"
import likevideoHandler from "../Reducer/likevideoReducer"
// import axios from "axios"


export const LikevideoContext = createContext()

export function useLikevideo () {
    return useContext(LikevideoContext)
}

export function LikevideoProvider({children}){
    const [ state,likeVideodispatch ] = useReducer(likevideoHandler,{videoInlikevideo:[]})

    return (
        <LikevideoContext.Provider value={{likeVideodispatch ,videoInlikevideo:state.videoInlikevideo}}>
            {children}
        </LikevideoContext.Provider>
    )
}