import React from "react"

function likevideoHandler(state,action){
    switch(action.type){
        case "ADD_TO_LIKEVIDEO":
        return {...state,videoInlikevideo:[...state.videoInlikevideo, action.payload]}
        case "fetch":
        return  {...state,videoInlikevideo:action.payload}    
        default :
        return state;
    }
}

export default likevideoHandler;