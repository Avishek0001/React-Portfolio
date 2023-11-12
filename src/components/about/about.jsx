 import React from "react";

 import "./about.css"
 import AboutImage from "../../MY-INFOs/1.jpg"
 import CV from "../../MY-INFOs/Avishek Kundu.pdf"
 import Info from "./info";


 function About(){
    
    return(
        <section className="about section" id="about"> 
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My Introduction</span>

        <div className="about_container container grid">
                <img src={AboutImage} alt="" className="about_img" />

                <div className="about_data">
                    <Info/>
                    <p className="about_description">
                    MERN Developer, I use React as front-end and Nodejs and Express
                        in backend along with database by using MongoDB
                    </p>

                    
                <a download="" href={CV} className="button button--flex"> Download CV 
                <i class="uil uil-file-info-alt" style={{"margin-left":"15px"}}></i>
                </a>
                </div>

        </div>


        </section>
    )
 }

 export default About
