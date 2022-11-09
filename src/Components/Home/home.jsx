import React from "react";
import "./home.css"
import {BsJoystick} from "react-icons/bs"

const Home = ( ) => {
    return (
        <div className="navbar">
        <div className="icon">
            <BsJoystick />
        </div>
                <div className="bar">
                <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">SKILL</a></li>
                        <li><a href="#">PROJECT</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                        <h1>SOFTWARE </h1>
                        <h2>DEVELOPER</h2>
                        <h4>Nairobi, Ke</h4>
                        <div className="page">
                        <h3>Hey There!!!</h3>
                        <h1>I'm JOY KEMUNTO</h1>
                        <h5>A Junior Software Developer</h5>
                        </div>
                </div>
        </div>
    )
}

export default Home
