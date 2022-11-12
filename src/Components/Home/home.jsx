import React from "react";
import "./home.css"
import {BsJoystick} from "react-icons/bs"
import Typewriter from "typewriter-effect";

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
                        <h1>I'm <span> JOY KEMUNTO</span></h1>
                        <h5>A Junior Software Developer</h5>
                            <p>
                        <Typewriter
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString("Front End Developer <br> . HTML <br> . CSS <br> . JavaScript <br> . React Framework")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Back End Developer <br> . Ruby on rails <br> . MySQL")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Interacting with the DOM")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("GIT")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Data Annotator <br> . Categorization <br> . Transcriptionist <br> . 2D/3D")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Yeap😊! Thats ME")
                    .start();
                    }}
                    />
                        </p>


                        </div>
                </div>
        </div>
    )
}

export default Home
