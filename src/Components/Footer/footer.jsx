import React from "react";
import "./footer.css"
import {FaInstagramSquare} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa"
import {FiFigma} from "react-icons/fi"
import {BsFillArrowUpCircleFill} from "react-icons/bs"
import {GrLinkedin} from "react-icons/gr"

const Footer = ( ) => {
    return (
        <footer>
        <a href="#" className="logo"></a>
        <a href="#"><BsFillArrowUpCircleFill /></a>
        <div className="soshi">
                <a href="https://www.linkedin.com/in/joy-kemunto-39506a1ba/" target= "_blank"><GrLinkedin/></a>
                <a href="https://dribbble.com/Truoy"><FaInstagramSquare /></a>
                <a href="https://github.com/Kemunto-wendy"><FaGithubSquare /></a>
                <a href="https://figma.com/@truoy"><FiFigma /></a>
        </div>

        <div className="copyright">
            <small>&copy; Created with react by <span>KEMUNTO. </span> All rights reserved</small>
        </div>
        </footer>
    )
}

export default Footer
