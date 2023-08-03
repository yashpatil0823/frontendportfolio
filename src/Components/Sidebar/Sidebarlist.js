import React from 'react'
import "./Sidebarlist.css";
// import profilepic from "../../images/profile.png"
import { Link } from "react-scroll"
import { FcTodoList, FcHome, FcAbout, FcFeedback, FcBusinessman, FcWorkflow, FcGraduationCap } from "react-icons/fc";
const Sidebarlist = ({ expandSidebar }) => {
  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbaritems">
          {/* <div className="sidebar-profile-pic">
            <img src={profilepic} alt="profile not visible"></img>
          </div> */}
          <ul>
            <li className="nav-item">
              <Link to="home"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcHome size={30} />
              HOME
              </Link>
            </li>
            <li className="nav-item">
            <Link to="about"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcAbout size={30} /> 
             ABOUT
              </Link>
             </li>
            <li className="nav-item"> 
            <Link to="experience"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
            <FcBusinessman size={30} />EXPERIENCE
            </Link>
            </li>
            <li className="nav-item">
            <Link to="project"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcWorkflow size={30} />PROJECTS
              </Link>
              </li>
            <li className="nav-item">
            <Link to="education"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcGraduationCap size={30} />EDUCATION
              </Link>
              </li>
            <li className="nav-item">
            <Link to="skill"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcTodoList size={30} />SKILLS
              </Link>
              </li>
            <li className="nav-item">
            <Link to="contact"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcFeedback size={30} />CONTACT
              </Link>
              </li>
          </ul>
        </div>
      ) : (
        <div className="navbariconsonly">
          <ul>
          <li className="nav-item">
              <Link to="home"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcHome size={30} />
              
              </Link>
            </li>
            <li className="nav-item">
            <Link to="about"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcAbout size={30} /> 
             
              </Link>
             </li>
            <li className="nav-item"> 
            <Link to="experience"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
            <FcBusinessman size={30} />
            </Link>
            </li>
            <li className="nav-item">
            <Link to="project"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcWorkflow size={30} />
              </Link>
              </li>
            <li className="nav-item">
            <Link to="education"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcGraduationCap size={30} />
              </Link>
              </li>
            <li className="nav-item">
            <Link to="skill"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcTodoList size={30} />
              </Link>
              </li>
            <li className="nav-item">
            <Link to="contact"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcFeedback size={30} />
              </Link>
              </li>
          </ul>

        </div>

      )}

    </React.Fragment>
  )
}

export default Sidebarlist
