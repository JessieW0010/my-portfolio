import React from "react";

function Projects() {
  return (
    <div className="Projects screen-height">
      <h1 className="text-center pt-3">Projects</h1>
      <div className="p-3">
        <div className="row m-0">
          <div className="col-xs-6 col-md-4 col-lg-4 p-1">
            <img className="project-img" src={require("../../assets/images/project.png")}/>
          </div>
          <div className="col-xs-6 col-md-4 col-lg-4 p-1">
            <img className="project-img" src={require("../../assets/images/project.png")}/>
          </div>
          <div className="col-xs-6 col-md-4 col-lg-4 p-1">
            <img className="project-img" src={require("../../assets/images/project.png")}/>
          </div>
          <div className="col-xs-6 col-md-4 col-lg-4 p-1">
            <img className="project-img" src={require("../../assets/images/project.png")}/>
          </div>
          <div className="col-xs-6 col-md-4 col-lg-4 p-1">
            <img className="project-img" src={require("../../assets/images/project.png")}/>
          </div>
          <div className="col-xs-6 col-md-4 col-lg-4 p-1">
            <img className="project-img" src={require("../../assets/images/project.png")}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
