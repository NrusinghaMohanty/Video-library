import React from 'react'
import { useHistory } from '../Context/historyContext'
import Navbar from "../Component/Navbar"
import { Link } from "react-router-dom"
import "./history.css";
import axios from "axios"

const History = () => {
    const { videoInhistory, historydispatch } = useHistory()

    const removefromhistory = (id) => {
        (async () => {
          const { success } = await axios
            .delete(`https://shoptube-backend.herokuapp.com/history/${id}`)
            .then((response) => {
              return response.data;
            });
          if (success) {
            historydispatch({ type: "REMOVE", payload: id });
          } else {
            console.log("error occured while removing video");
          }
        })();
      };


    const showHistory = (video) => {
        return (
            <>
                <div className="col">
                    <Link to={`/videos/${video._id}`}>
                        <div style={{ width: "560", height: "315" }}>
                            <img src={video.imageurl} style={{ width: "100%" }} alt="not found" />
                        </div>
                    </Link>
                    <div className="video-text">
                        {/* <div className="video-logo">
                            <img src={video.channellogourl} />
                        </div> */}
                        <div className="video-details">
                            <p>{video.name}</p>
                            <small>{video.channelname}</small>
                            <p>{video.date}</p>
                        </div>
                        <div>
                            {/* <i className="fas fa-ellipsis-v"></i> */}
                            <button onClick={()=>removefromhistory(video._id)} className="btnn">Remove</button>
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