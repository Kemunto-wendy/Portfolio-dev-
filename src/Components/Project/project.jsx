import React from "react";
import "./project.css"
import blog from "../../assets/blog.png"
import pixel from "../../assets/pixel.png"
import book from "../../assets/book.png"
import yellow from "../../assets/yellow.png"
import clock from "../../assets/clock.png"
import black from "../../assets/black.png"



const Project = ( ) => {
    return(
        <section id="Project">
            <h5>Sample Projects</h5>
            <div className="portfolio">
                    <article className="item">
                            <div className="images">
                                    <img src={blog} alt="sample project" />
                            </div>
                                        <a href="https://github.com" className="btn" >Github</a>
                                         {/*<a href="https://dribble.com/Alien_pixels" className="btn btn-primary" >Live Demo</a> */}
                                </article>

                                <article className="item">
                                <div className="images">
                                        <img src={pixel} alt="sample project" />
                                </div>
                                            <a href="https://github.com" className="btn" >Github</a>
                                             {/*<a href="https://dribble.com/Alien_pixels" className="btn btn-primary" >Live Demo</a> */}
                                    </article>

                                    <article className="item">
                                    <div className="images">
                                            <img src={yellow} alt="sample project" />
                                    </div>
                                                <a href="https://github.com" className="btn" >Github</a>
                                                 {/*<a href="https://dribble.com/Alien_pixels" className="btn btn-primary" >Live Demo</a> */}
                                        </article>


                                        <article className="item">
                                        <div className="images">
                                                <img src={book} alt="sample project" />
                                        </div>

                                                    <a href="https://github.com" className="btn" >Github</a>
                                                    {/*<a href="https://dribble.com/Alien_pixels" className="btn btn-primary" >Live Demo</a> */}
                                            </article>


                                            <article className="item">
                                            <div className="images">
                                                    <img src={black} alt="sample project" />
                                            </div>

                                                        <a href="https://github.com" className="btn" >Github</a>
                                                         {/*<a href="https://dribble.com/Alien_pixels" className="btn btn-primary" >Live Demo</a> */}
                                                </article>

                                                <article className="item">
                                                <div className="images">
                                                        <img src={clock} alt="sample project" />
                                                </div>

                                                            <a href="https://github.com" className="btn" >Github</a>
                                                        {/*<a href="https://dribble.com/Alien_pixels" className="btn btn-primary" >Live Demo</a> */}
                                                    </article>



            </div>
   </section>
    )
}

export default Project
