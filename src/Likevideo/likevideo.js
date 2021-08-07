import React from 'react'
import ReactPlayer from "react-player"
import { useLikevideo } from "../Context/likevideoContext"

const Likevideo = () => {
const {videoInlikevideo}= useLikevideo()

const showLikevideo = (video) =>{
    return (
        <>
         <ReactPlayer url={video.videourl} controls />
        </>
    )
}

    return (
        <div>
            {videoInlikevideo.map(showLikevideo)}
        </div>
    )
}

export default Likevideo;