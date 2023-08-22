import React, { useState } from "react";
import "./services.css"

function Services(){
        const [toggleState , setToggleState] = useState(0);

        const handleToggle = (index) =>{
            setToggleState(index)
        }

    return(
        <section className="services section" id="services">
            <h2 className="section_title">Services</h2>
            <span className="section_subtitle">Things I may do for my clients</span>

            <div className="services_container container grid">
                <div className="services_content">
                    <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">WebPage <br/> Design</h3>
                </div>
                <span className="services_button" onClick={() => handleToggle(1)}>View More{" "} 
                <i className="uil uil-arrow-right services_button-icon"></i>                
                </span>

                <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={()=> handleToggle(0)} className="uil uil-times services_modal-close"></i>
                <h3 className="services_modal-title">Web Page Design</h3>
                <p className="services_modal-description">Providing quality work to clients </p>

                <ul className="services_modal-services grid">
                    <li className="services_modal-service">
                        <i className="uil uil-check-circle services_modal-icon"></i>
                        <p className="services_modal-info">I will develop the user interface</p>
                    </li>
                    <li className="services_modal-service">
                        <i className="uil uil-check-circle services_modal-icon"></i>
                        <p className="services_modal-info">Web Page Development</p>
                    </li>
                    
                </ul>


                    </div>
                </div>

            </div>
                <div className="services_content">
                    <div>
                    <i class="uil uil-window services_icon"></i>
                    <h3 className="services_title">WebPage <br/> Development</h3>
                </div>
                <span onClick={() => handleToggle(2)} className="services_button">View More{" "} <i 
                className="uil uil-arrow-right services_button-icon"></i>                
                </span>

                <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={()=> handleToggle(0)} className="uil uil-times services_modal-close"></i>
                <h3 className="services_modal-title">WebPage Development</h3>
                <p className="services_modal-description">Providing quality work to clients </p>

                <ul className="services_modal-services grid">
                    <li className="services_modal-service">
                        <i className="uil uil-check-circle services_modal-icon"></i>
                        <p className="services_modal-info">I will develop the user interface</p>
                    </li>
                    <li className="services_modal-service">
                        <i className="uil uil-check-circle services_modal-icon"></i>
                        <p className="services_modal-info">I will develop the Server-Side of the Page</p>
                    </li>
                    
                </ul>


                    </div>
                </div>

            </div>
            </div>
       </section>
    )
}

export default Services