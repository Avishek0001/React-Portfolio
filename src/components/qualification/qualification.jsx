import React from "react";
import "./qualification.css"

function Qualification(){
return (
    <section>
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My Personal Journey</span>

        <div className="qualification_container ">
            <div className="qualification_tabs">
                <div className="qualification_button button--flex">
                    <i className="uil uil-graduation-cap qualification_icon"></i> Education
                </div>
                
            </div>

                <div className="qualification_sections">
                    <div className="qualification_content qualification_content-active">
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">B.TECH </h3>
                                <span className="qualification_subtitle">Techno Main SaltLake</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>2019-2023
                                </div>
                            </div>
                                    <div>
                                <span className="qualification_rounder"></span>
                                <div className="qualification_line"></div>
                                    </div>

                        </div>


                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">WEB DEVELOPMENT</h3>
                                <span className="qualification_subtitle">Techno Main SaltLake</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>2021-present
                                </div>
                            </div>
                                    <div>
                                <span className="qualification_rounder"></span>
                                <div className="qualification_line"></div>
                                    </div>

                        </div>

                    </div>
                </div>

                <div className="qualification_profile flex-container">
                <span className="qualification_profile_subtitle">For Further Information U can check mY LinkedIn Profile</span>
                {/* <a href="" className=" qualification_profile_icon"  target="_blank"> */}
                
                <div className="wrapper">
                <div className="qualification_button-profile">
                <a href="linkedin.com/in/avishek-kundu-6b9a6720b" className=" profile_text"  target="_blank">
                <div className="qualification_icon_style">
                <i class="uil uil-linkedin-alt"></i>
                </div>
                </a>
                <span >LinkedIn</span>
                </div>
                </div>
                {/* </a> */}

                </div>

        </div>
    </section>
)
}

export default Qualification
