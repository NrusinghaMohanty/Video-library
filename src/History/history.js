import React from 'react'
import ReactPlayer from "react-player"
import { useHistory } from '../Context/historyContext'

const History = () => {
const {videoInhistory,historydispatch}= useHistory()

const showHistory = (video) =>{
    return (
        <>
         <ReactPlayer url={video.videourl} controls />
        </>
    )
}

    return (
        <div>
            {videoInhistory.map(showHistory)}
        </div>
    )
}

export default History