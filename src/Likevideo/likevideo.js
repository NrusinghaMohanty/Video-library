import React from 'react'
import { useLikevideo } from "../Context/likevideoContext"
import "./likevideo.css"
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar"
import axios from "axios"

const Likevideo = () => {
    const { videoInlikevideo } = useLikevideo()
    const {likeVideodispatch} = useLikevideo()

    const removefromlikedvideo = (id) => {
        (async () => {
          const { success } = await axios
            .delete(`https://shoptube-backend.herokuapp.com/likedvideo/${id}`)
            .then((response) => {
              return response.data;
            });
          if (success) {
            likeVideodispatch({ type: "REMOVE", payload: id });
          } else {
            console.log("error occured while removing video");
          }
        })();
      };

    const showLikevideo = (video) => {
        return (
            <>
                <div className="col">
                    <Link to={`/videos/${video._id}`}>
                        <div style={{ width: "560", height: "315" }}>
                            <img src={video.imageurl} style={{ width: "100%" }} />
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
                            <i className="fas fa-ellipsis-v"></i>
                            <button onClick={()=>removefromlikedvideo(video._id)}>Remove</button>
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
                    {videoInlikevideo.map(showLikevideo)}
                </div>
            </section>
        </div>
    )
}

export default Likevideo;