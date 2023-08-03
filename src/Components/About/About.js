import React from 'react'
import "./About.css"
import Profilepic from "../../images/profile.png"
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
const About = () => {
  return (
    <div className='container about-section' id="about">

      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className='about-image' >
              <img src={Profilepic} alt="error" />
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-details">
              <Flip right>
                <div className="about-title">
                  <h5>About Me</h5>
                  <span className='line-about'></span>
                </div>
              </Flip>
              <p className='about-para'>My aim is to be a successful professional in a Globally respected Company and to achieve the objectives of
the company with honesty and fairness and to continuously upgrade my Knowledge and Skills.Strong in design and integration with intuitive problem-solving skills. Proficient in C++, PYTHON, JAVASCRIPT, and MONGOBD. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.</p>
            </div>
          </div>
        </Fade>
      </div>

    </div>
  )
}

export default About
