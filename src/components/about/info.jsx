import React from "react";

function Info() {

    return (
        <div className="about_info grid">
            <div className="about_box">
                <i class="uil uil-award about_icon"></i>
                <h3 className="about_title">Education</h3>
                <span className="abut_subtitle">B.Tech(2019-2023)  </span>
            </div>

            <div className="about_box">
                <i class="uil uil-briefcase about_icon"></i>
                <h3 className="about_title">Completed</h3>
                <span className="abut_subtitle" >
                    Some descent projects

                </span>
            </div>

            {/* <div className="about_box">
                <i class='bx bx-support about_icon'></i>
                <h3 className="about_title">Support</h3>
                <span className="abut_subtitle">Online 24x7 </span>
            </div> */}

        </div>
    )
}

export default Info