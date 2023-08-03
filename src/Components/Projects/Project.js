import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  const data = [
    {
      name: "FUND RAISING WEBSITE",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      projectlink: "https://react-company-profile.netlify.app/",
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "Javascript",
        },
        {
          techname: "PHP",
        },
      ],
    },

    {
      name: "TOUR PLANNING WEBSITE",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      projectlink: "https://react-company-profile.netlify.app/",
      techused: [
        {
          techname: "React Js",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "Node Js",
        },
      ],
    },

    {
      name: "BANK MANAGEMENT SYSYTEM",
      des: "The Bank Management System (BMS) is a web-based tool that is  used to reimburse financial institutions for services rendered to the Bureau of the Fiscal Service.It is a program that keeps track of a client’s bank account. This project demonstrates the operation of a banking account system and covers the essential functions of bank management software.  ",
      projectlink: "https://react-company-profile.netlify.app/",
      techused: [
        {
          techname: "C++",
        },
        {
          techname: "Phpmyadmin",
        },
        {
          techname: "Xampp",
        },
        {
          techname: "Mysql",
        },
      ],
    },
  ];

  return (
    <div className="container project-section" id="project">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line-project"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>

            <ProjectList  {...item} />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
