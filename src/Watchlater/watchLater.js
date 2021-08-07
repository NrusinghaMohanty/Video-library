import React from 'react'
import ReactPlayer from 'react-player'
import { useWatchLater } from '../Context/watchContext'

const WatchLater = () => {
    const {videoInwatchLater}= useWatchLater()

    const showWatchLater = (video) =>{
        return (
            <>
             <ReactPlayer url={video.videourl} controls />
            </>
        )
    }
    
        return (
            <div>
                {videoInwatchLater.map(showWatchLater)}
            </div>
        )
    }

export default WatchLater
