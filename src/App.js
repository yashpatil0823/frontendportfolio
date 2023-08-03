import React,{useState,createContext}from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import About from './Components/About/About'
import Skill from './Components/Skills/Skill'
import Project from './Components/Projects/Project'
import WorkExperience from './Components/WorkExperience/WorkExperience'
import Education from './Components/Education/Education'
import Contact from './Components/Contact/Contact'
import ScrollToTop from "react-scroll-to-top";
import NavbarMobileView from './Components/Sidebar/NavbarMobileView'
import "./App.css";
export const ThemeContext =createContext(null);
const App = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
    <div id={theme}>
     <NavbarMobileView changeTheme={changeTheme} theme={theme}/>

      <Sidebar changeTheme={changeTheme} theme={theme}/>
      <About/>
      <WorkExperience/>
      <Project/>
      <Education/>
      <Skill/>
      <Contact/>
      </div>
      <ScrollToTop smooth={true}
      color='white' 
      style={{ borderRadius:"90px",backgroundColor:"#38004c"}}
      />
    </ThemeContext.Provider>    
  )
}

export default App

