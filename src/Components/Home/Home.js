import React from 'react'
import "./Home.css";
import Typewriter from 'typewriter-effect';
import Mycv from "./cv.pdf"
import { Link } from "react-scroll";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
const Home = ({ theme, changeTheme }) => {
  return (
    <div className='container-fluid home' id='home'>
      <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <p>
            <BsFillMoonStarsFill size={40} />
          </p>
        ) : (
          <p className="sun-theme-icon">
            <BsFillSunFill size={40} />
          </p>
        )}
      </div>

      <div className="container home-content">
      <Zoom top>
        <h1>Hi I am </h1>
        <h2>
          <Typewriter
            options={{
              strings: ['A Software Developer', 'A Front-end Developer',"Learning MERN Stack Development"],
              autoStart: true,
              loop: true,
            }}
            />
        </h2>
        </Zoom>
        <div className="button-for-action">
          <Fade bottom>

        <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <div className="hire-me-button">HIRE ME</div>
            </Link>
          <div className='get-reusme-button'>
            <a id="resumelink" href={Mycv} download="Yash_Patil_CV">
              DOWNLOAD CV
              </a>
              </div>
              </Fade>
        </div>
      </div>
    </div>
  )
}

export default Home
