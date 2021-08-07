import React from 'react'
import { useVideo } from '../Context/videoContext'
import { useState } from 'react';
import "./video.css"
import {Link} from "react-router-dom"
import {HomeIcon} from '@material-ui/icons';

const Video = () => {
    const { videos, videodispatch } = useVideo();
    
  const [show, setshow] = useState(false);
  function showallVideos(video) {
    return (
      <>
       <div className="col">
        {/* <iframe width="560" height="315" src={video.videourl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
        /> */}
        <Link to={`videos/${video._id}`}>
        <div style={{width:"560" ,height:"315"}}>
            <img src={video.imageurl} style={{width:"100%"}}/>
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
           <i class="fas fa-ellipsis-v"></i>
           </div>
        </div>
        </div>
      </>
    );
    }
    return (
        <>
        <div>

        <nav>
        <div class="logo">
            <h1>VIDEO</h1>
        </div>
        <div class="menu">
            {/* <span><HomeIcon style={{ color: green[500] }} />Home</span> */}
            <Link to="/likevideo">Likevideo</Link>
            <Link to="/watchlater">Watch Later</Link>
            <Link to="/history">History</Link>
        </div>
    </nav>
            

            <section>
        <div class="row row-2">
            <h1>All video</h1>
            <input placeholder="search....."/>
        </div>
        <div class="row">
        {videos.map(showallVideos)}
        </div>
    </section>

        </div>

        </>
    )
}

export default Video

