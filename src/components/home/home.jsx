import React from "react"
import "./home.css"
import Social from "./social"
import Data from "./Data"
import Arrow1 from "../../MY-INFOs/curved-arrow.svg"
import Arrow2 from "../../MY-INFOs/X.png"
import Pick1 from "../../MY-INFOs/shap-2.png"


import ScrollDown from "./ScrollDown"

const Home = () =>{
    return(
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_content grid">
                        <Social/>
                        <div className="home_img"></div>
                        <div className="border_img"></div>
                        
                        <img src={Arrow1} className="arrow1_img"/>                      
                        <img src={Arrow2} className="arrow2_img"/>                      
                        <img src={Pick1} className="pick1_img"/>                      
                                      
                        
                        
                        <Data/>
                </div>

                {/* <ScrollDown/> */}
            </div>

        </section>
    )
}

export default Home