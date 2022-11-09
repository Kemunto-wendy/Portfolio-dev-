import React from "react";

const About = ( ) => {
    return (
        <div className="about">
            <div className="bout">
                <h1>Get to know me</h1>
            </div>

            <div className="button">
            <a href={CV} download className="btn" >Download CV </a>
            <a href={CV} view className="btn-primary">  View Resume </a>
            </div>
        </div>
    )
}

export default About
