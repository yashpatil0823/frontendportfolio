import React,{useState} from 'react'
import "./Skill.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
const Skill = () => {

    const data = [
        {
            name: "React js"
        },
        {
            name: "Node js"
        },
        {
            name: "Express js"
        },
        {
            name: "HTML"
        },
        {
            name: "CSS"
        },
        {
            name: "Javascript"
        },
        {
            name: "C++"
        },
        {
            name: "Java"
        },
        {
            name: "Python"
        },
        {
            name: "Mongodb"
        },
        {
            name: "Mysql"
        },
        {
            name: "DSA"
        },
    ];
    const colors = [
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    ];
    const[showmoreskill,setshowmoreskill]= useState(6);
    const loadmore =()=>{
        setshowmoreskill((prev)=>prev+3);
    }
    return (
        <div className='container skill-section' id="skill">
            <div className="section-title">
                <h5>Skills</h5>
                <span className='line-skill'></span>
            </div>
            <div className="row">
                    
                {data.slice(0,showmoreskill).map((item, index) => (
                    <Fade right>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                        <div className="skill-content" >
                            <span className='skill-no' style={{backgroundColor:colors[index]}}>
                                {index+1}
                            </span>
                            <p>{item.name}</p>

                        </div>
                    </div>
                    </Fade>

                ))}
            </div>
            {showmoreskill >= data.length ? null:(
            <Zoom top>
                
                <span className="skill-loadmore" onClick={loadmore}>
                Load More
            </span>
            </Zoom>
                )}
        </div>
    );
};

export default Skill
