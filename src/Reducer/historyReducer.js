import React from "react"

function historyHandler(state, action) {
    switch (action.type) {
        case "ADD_TO_HISTORY":
            return { ...state, videoInhistory: [...state.videoInhistory, action.payload] }
        case "fetch":
            return { ...state, videoInhistory: action.payload }
        case "REMOVE":
            return {
                ...state,
                videoInhistory: state.videoInhistory.filter(
                    (video) => video._id !== action.payload
                )
            };
        default:
            return state;
    }
}

export default historyHandler;