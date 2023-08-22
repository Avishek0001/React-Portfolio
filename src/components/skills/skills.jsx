import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import Other from './Other'
import "./skills.css"



const Skill =()=>{

    return(
        <section className='skills section' id='skills'>
            <h2 className="section_title">Skills</h2>
            <p className="section_subtitle">My Technical Skills</p>

            <div className="skills_container container grid">
                <Frontend/>

                <Backend/>
                <Other/>
            </div>


        </section>
    )
}
export default Skill