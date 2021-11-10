
function watchLaterHandler(state, action) {
    switch (action.type) {
        case "ADD_TO_WATCHLATER":
            return { ...state, videoInwatchLater: [...state.videoInwatchLater, action.payload] }
        case "fetch":
            return { ...state, videoInwatchLater: action.payload }
        case "REMOVE":
            return {
                ...state,
                videoInwatchLater: state.videoInwatchLater.filter(
                    (video) => video._id !== action.payload
                )
            };
        default:
            return state;
    }
}

export default watchLaterHandler;