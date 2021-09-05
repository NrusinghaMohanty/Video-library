import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
        <nav>
        <div className="logo">
            <h1>VIDEO</h1>
        </div>
        <div className="menu">
            <Link to="/" className="link">Home</Link>
            <Link to="/likevideo" className="link">Likevideo</Link>
            <Link to="/watchlater" className="link">Watch Later</Link>
            <Link to="/history" className="link">History</Link>
        </div>
    </nav>
    </>
    )
}

export default Navbar;