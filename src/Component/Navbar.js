import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import {MdWatchLater} from "react-icons/md"
import {AiTwotoneLike,AiOutlineHome} from "react-icons/ai"
import {FaHistory} from "react-icons/fa"

const Navbar = () => {
    return (
        <>
        <nav>
        <div className="logo">
            <h1>Travel-Tube</h1>
        </div>
        <div className="menu">
            <Link to="/" className="link">Home<AiOutlineHome className="link-icon"/></Link>
            <Link to="/likevideo" className="link">Likevideo<AiTwotoneLike className="link-icon"/></Link>
            <Link to="/watchlater" className="link">Watch Later<MdWatchLater className="link-icon"/></Link>
            <Link to="/history" className="link">History<FaHistory className="link-icon"/></Link>
        </div>
    </nav>
    </>
    )
}

export default Navbar;