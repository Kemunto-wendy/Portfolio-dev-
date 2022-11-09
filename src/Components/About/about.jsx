import React from "react";
import CV from "../../assets/CV.pdf"
import {FaArrowRight} from "react-icons/fa"

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
            <div className="par">
                <p>Recent bachelor's degree with a background in web design and development.
                Moringa school web developer certification.Motivated, responsible and hardworking
                ready to advance in the field of Information Technology majoring in Full Stack
                Development and Networking. I have a strong drive to see things to competition
                and learn more in my technical Skill since the world of technology keeps on changing
                 every time. I have excellent Computer Skills in all the Computer packages.
                 A creative copywriter with knowledge of SEO best practices and keyword optimization.
                 Well organized research skills to craft unique and valuable content for a wide variety
                 of target audiences. I am looking forward to develop my next project with the wonderful
                 team. I believe the knowledge gained will help me achieve great in my software engineering path.</p>
            </div>
            <div className="ton">
            <a href="https://www.linkedin.com/in/joy-kemunto-39506a1ba/" target= "_blank"> Lets chat  <FaArrowRight /> </a>
            </div>
        </div>
    )
}

export default About
