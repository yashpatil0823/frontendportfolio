import React from "react";
import "./WorkExperience.css";
import certificate1 from "../../Components/WorkExperience/certificate.pdf"
import certificate2 from "../../Components/WorkExperience/certificate2.pdf"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {
  const data = [
    {
      companyname: "OASIS INFOBYTE",
      position: "Frontend Developer Intern",
      des: " I am glad to share that I have successfully completed a one month internship at Oasis Infobyte in web development and designing .It was a 1 month internship with 3 different project tasks. ",
      year: "MAY2022-JUNE2022",
      techskills: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JAVASCRIPT",
        },
      ],
      certificate:<div className='get-cer-button'>
      <a href={certificate2} target="_blank" rel="noreferrer">
       SEE CERTIFICATE
        </a>
        </div> ,
    },

    {
      companyname: "TATA",
      position: "Data Visualisation Internship",
      des: "The virtual experience programme is provided by Tata iQ or Tata Insights and Quants. I discover how passionate, multidisciplinary experts utilise data visualisation technologies like Tableau and Power BI to take on some of the most difficult business problems and uncover fascinating insights buried in the mountains of produced data.  ",
      year: "AUG2022-NOV2022",

      techskills: [
        {
          techname: "POWER BI",
        },
        {
          techname: "TABLEAU",
        },
      ],
      certificate: <div className='get-cer-button'>
      <a href={certificate1} target="_blank" rel="noreferrer">
        SEE CERTIFICATE
        </a>
        </div>
      ,
    },
  ];

  const colors = [
   "gray",
   "gray"
  ];

  return (
    <div className="container workexperience-section" id="experience">
      <div className="section-title">
        <h5>Work Experience</h5>
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
              icon={<MdGroupWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>

              <div className="row">
                {item.techskills.map((tec, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    key={index}
                  >
                    <div className="tech-skills">
                      <p>{tec.techname}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>{item.des}</p>
              <div>
                {item.certificate}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>


      
    </div>
  );
};

export default WorkExperience;
