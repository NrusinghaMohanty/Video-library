import React from 'react'
import ReactPlayer from "react-player"
import { useHistory } from '../Context/historyContext'
import Navbar from "../Component/Navbar"
import { Link } from "react-router-dom"
import "./history.css";

const History = () => {
    const { videoInhistory, historydispatch } = useHistory()

    const showHistory = (video) => {
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
        )
    }

    return (
        <div>
            <Navbar />
            <section>
                <div className="row">
                   {videoInhistory.map(showHistory)}
                </div>
            </section>
        </div>
    )
}

export default History