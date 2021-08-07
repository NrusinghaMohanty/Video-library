import React from 'react'
import {useVideo} from "../Context/videoContext"
import axios from "axios"
import { useParams } from "react-router-dom";
import {useState ,useEffect} from "react"
import ReactPlayer from "react-player";
import { useHistory } from '../Context/historyContext';
import { useWatchLater } from '../Context/watchContext';
import { useLikevideo } from '../Context/likevideoContext';

const Videodetails = () => {

    let { videoId } = useParams();
    const [video, setvideo] = useState({});
    const {historydispatch} = useHistory()
    const {watchLaterdispatch} = useWatchLater()
    const {likeVideodispatch} = useLikevideo()


    useEffect(() => {
        (async () => {
            const { video: data } = await axios
                .get(`https://videolibrary.nrusingha.repl.co/videos/${videoId}`)
        .then((response) => {
                    console.log(response.data)
                    return response.data;
                });
            setvideo(data);
        })();
    });

const addTohistory = () => {
    (async () => {
        const { success ,history : data} = await axios
             .post("https://videolibrary.nrusingha.repl.co/history",{
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
            const { watchLatervideos : data} = await axios
                 .post("https://videolibrary.nrusingha.repl.co/watchlater",{
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
            const { success ,likeVideos : data} = await axios
                 .post("https://videolibrary.nrusingha.repl.co/likevideo",{
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
                    likeVideodispatch({ type: "ADD_TO_LIKEVIDEO", payload: data });
                })()
    }

    return (
        <>
            <div style={{textAlign:"center"}}class="productdetail-container">
                <div className="productdetail-img">
                    <ReactPlayer url={video.videourl} controls onPlay={()=>addTohistory()}/>
                </div>
                <div className="productdetail-info">
                    <h4>{video.name}</h4>
                    <p>{video.channelname}</p>
                    <button onClick={()=>addTowatchLater()}>watch Later</button>
                    <button onClick={()=>addTolikevideo()}>Like</button>
                </div>
            </div>
        </>
    )
}

export default Videodetails
