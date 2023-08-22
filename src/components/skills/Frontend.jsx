import React from "react";

function Frontend(){
    return(
        <div className="skills_content">
            <h3 className="skills_title">Frontend Development</h3>
            <div className="skills_box">
                <div className="skills_group">
               
                    <div className="skills_data">
                    <i class="uil uil-html5"></i>
                        <div>
                            <h3 className="skills_name">HTML</h3>
                            <span className="skills_level">Basic</span>

                        
                    </div>
                </div>
                
                    <div className="skills_data">
                    <i class="uil uil-css3-simple"></i>
                        <div>
                            <h3 className="skills_name">CSS</h3>
                            <span className="skills_level">Intermediate</span>

                      
                    </div>
                </div>
                
                    <div className="skills_data">
                    <i class="uil uil-java-script"></i>
                        <div>
                            <h3 className="skills_name">JAVA-SCRIPT</h3>
                            <span className="skills_level">Intermediate</span>

                        
                    </div>
                </div>
                
                    <div className="skills_data">
                    <i class="uil uil-react"></i>
                        <div>
                            <h3 className="skills_name">REACT</h3>
                            <span className="skills_level">Intermediate</span>
                    </div>
                </div>
                {/* <div className="skills_group">
                    <div className="skills_data">
                    <i class="uil uil-award-alt"></i>
                        <div>
                            <h3 className="skills_name">Javascript</h3>
                            <span className="skills_level">Intermediate</span>

                        </div>
                    </div>
                </div> */}
                </div>
            </div>
        </div>
    )
}
export default Frontend