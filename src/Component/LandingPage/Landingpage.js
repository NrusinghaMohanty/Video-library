import React from 'react'
import "./landingpage.css"
import {Link} from "react-router-dom"

const Landingpage = () => {
    return (
        <>
            <section className="landingpage-top">
                <div className="landingpage-video-container">
                    <video src="https://res.cloudinary.com/djc1o48j7/video/upload/v1636523979/video-library/video_uz1phf.mov" autoplay muted loop></video>
                </div>
                <div className="landingpage-video-content">
                    <h1>Travel-Tube.....</h1>
                    <Link to="/videos" className="explore">Explore More</Link>
                </div>
            </section>
        </>
    )
}

export default Landingpage
