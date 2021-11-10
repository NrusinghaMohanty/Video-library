import React from 'react'
import "./videodetails.css"
import axios from "axios"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import ReactPlayer from "react-player";
import { useHistory } from '../Context/historyContext';
import { useWatchLater } from '../Context/watchContext';
import { useLikevideo } from '../Context/likevideoContext';
import Navbar from "../Component/Navbar"

const Videodetails = () => {

  let { videoId } = useParams();
  const [video, setvideo] = useState({});
  const { historydispatch } = useHistory()
  const { watchLaterdispatch } = useWatchLater()
  const { likeVideodispatch } = useLikevideo()


  useEffect(() => {
    (async () => {
      const { video: data } = await axios
        .get(`https://shoptube-backend.herokuapp.com/videos/${videoId}`)
        .then((response) => {
          console.log(response.data)
          return response.data;
        });
      setvideo(data);
    })();
  });

  const addTohistory = () => {
    (async () => {
      const { success, history: data } = await axios
        .post("https://shoptube-backend.herokuapp.com/history", {
          _id: video._id,
          name: video.name,
          imageurl: video.imageurl,
          channellogourl: video.channellogourl,
          channelname: video.channelname,
          date: video.date,
          videourl: video.videourl
        })
        .then((response) => {
          return response.data;
        });
      if (success) {
        historydispatch({ type: "ADD_TO_HISTORY", payload: data });
      } else {
        console.log("error");
      }
    })()

  }

  const addTowatchLater = () => {
    (async () => {
      const { watchLatervideos: data } = await axios
        .post("https://shoptube-backend.herokuapp.com/watchlater", {
          _id: video._id,
          name: video.name,
          imageurl: video.imageurl,
          channellogourl: video.channellogourl,
          channelname: video.channelname,
          date: video.date,
          videourl: video.videourl
        })
        .then((response) => {
          return response.data;
        });
      watchLaterdispatch({ type: "ADD_TO_WATCHLATER", payload: data });
    })()
  }

  const addTolikevideo = () => {
    (async () => {
      const { success, video: data } = await axios
        .post("https://shoptube-backend.herokuapp.com/likevideo", {
          _id: video._id,
          name: video.name,
          imageurl: video.imageurl,
          channellogourl: video.channellogourl,
          channelname: video.channelname,
          date: video.date,
          videourl: video.videourl
        })
        .then((response) => {
          return response.data;
        });
        if (success)
      likeVideodispatch({ type: "ADD_TO_LIKEVIDEO", payload: data });
      else
      console.log("error")
    })()
  }

  return (
    <>
      <>
        <Navbar />
        <div className="video-container">
          <div>
            <ReactPlayer url={video.videourl} controls onPlay={() => addTohistory()} className="video-player" />
          </div>
          <div className="video-details-btn">
            <div>
              <h3>{video.name}</h3>
              <p>{video.channelname}</p>
            </div>
            <div>
              <button onClick={() => addTowatchLater()}>watch Later</button>
              <button onClick={() => addTolikevideo()}>Like</button>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default Videodetails