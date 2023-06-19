import React, { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"

const Header =()=>{
    const [loggedin, setLoggedin] = useState(false)
    return(
        <div className="header">
            <div className="logo-container">
                <Link to="/">
                    <img 
                        className="logo"
                        src= {LOGO_URL}
                    />
                </Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                         <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>setLoggedin(!loggedin)}>{loggedin? "Logout": "Login"}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header