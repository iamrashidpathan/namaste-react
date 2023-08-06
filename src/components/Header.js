import { useSelector } from "react-redux"
import React, { useState, useContext } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext"

const Header =()=>{
    const data = useContext(UserContext)
    const [loggedin, setLoggedin] = useState(false)

    // Subscribe to store using selector
    const cartItems = useSelector(store => store.cart.items)

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
                        {data.loggedInUser}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                         <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart ({cartItems.length} items)</Link>
                    </li>
                    <li>
                        <button className="login" onClick={()=>setLoggedin(!loggedin)}>{loggedin? "Logout": "Login"}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header