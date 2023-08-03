import React from "react";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";



import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  const data = [
    {
      name: "AISSMS IOIT",
      degree: "B.E. in Computer Engineering",
      year: "2020-2024",
    },
    {
      name: "Dr. RP NATH JUNIOR COLLEGE ",
      degree: "HSC",
      year: "2018-2020",
    },
    {
      name: "MAHARISHI VIDYA MANDIR",
      degree: "5th - 10th",
      year: "2013-2018",
    },
    {
      name: "SAINT MONICA SCHOOL",
      degree: "LKG-4th",
      year: "2007-2013",
    },
  ];


  const colors = [
   "gray",
   "gray",
   "gray",
   "gray",
  ];

  return (
    <div className="container education-section" id="education">

      <div className="section-title">
        <h5>Education</h5>
        <span className="line"></span>
      </div>


      <div className="timeline-section">

        <VerticalTimeline lineColor="black">

          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.name}
              </h3>
              <h5 className="vertical-timeline-element-subtitle" style={{color:"black"}}>
                {item.degree}
              </h5>

            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>


    </div>
  );
};

export default Education;