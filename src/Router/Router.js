import React from 'react'
import {Route,Routes} from "react-router-dom"
import Video from "../Video/video"
import Videodetails from '../videodetails/videodetails'
import History from '../History/history'
import WatchLater from '../Watchlater/watchLater'
import Likevideo from '../Likevideo/likevideo'
import Landingpage from "../Component/LandingPage/Landingpage"

const Router = () => {
    return (
        <div>
           <Routes>
               <Route path="/" element={<Landingpage />} />
               <Route path="/videos" element={<Video />} />
               <Route path="/videos/:videoId" element={<Videodetails />} />
               <Route path="/history" element={<History />} />
               <Route path="/watchlater" element={<WatchLater />} />
               <Route path="/likevideo" element={<Likevideo />} />
           </Routes> 
        </div>
    )
}

export default Router
