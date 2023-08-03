import React, { useState } from "react";
import "./NavbarMobileView.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FcTodoList, FcHome, FcAbout, FcFeedback, FcBusinessman, FcWorkflow, FcGraduationCap } from "react-icons/fc";

import { Link } from "react-scroll";
import Switch from "react-switch";

const NavbarMobileView = ({ theme, changeTheme }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="mobile-view-navbar">
      <div className="navbar-header">
        <p>
          <GiHamburgerMenu size={25} 
          onClick={handleClick} 
          
          />
        </p>
      </div>

      {open ? (
        <div className="mobile-nav">
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
            <li className="nav-item-mobileview">

              <Switch onChange={changeTheme} checked={theme==="dark"}/>
              
            </li>


          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobileView;
