import React from 'react'
import { useVideo } from '../Context/videoContext'
import { useState } from 'react';
import "./video.css"
import { Link } from "react-router-dom"
import { HomeIcon } from '@material-ui/icons';
import Navbar from "../Component/Navbar"

const Video = () => {
    const { videos, videodispatch } = useVideo();

    const [show, setshow] = useState(false);
    function showallVideos(video) {
        return (
            <>
                <div className="col">
                    <Link to={`videos/${video._id}`}>
                        <div style={{ width: "560", height: "315" }}>
                            <img src={video.imageurl} style={{ width: "100%" }} />
                        </div>
                    </Link>
                    <div className="video-text">
                        <div className="video-logo">
                            <img src={video.channellogourl} />
                        </div>
                        <div className="video-details">
                            <p>{video.name}</p>
                            <small>{video.channelname}</small>
                            <p>{video.date}</p>
                        </div>
                        <div>
                            <i className="fas fa-ellipsis-v"></i>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <div>
                <Navbar/>
                <section>
                    <div className="row row-2">
                        <h1>All video</h1>
                        <input placeholder="search....." />
                    </div>
                    <div className="row">
                        {videos.map(showallVideos)}
                    </div>
                </section>

            </div>

        </>
    )
}

export default Video;

