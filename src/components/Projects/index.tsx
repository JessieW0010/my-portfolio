import React from "react";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

function Projects() {
  const projects = [
    "The Shoppies",
    "Hopper",
    "PlanIt",
    "Groupdesk",
    "FutureFit AI",
    "Geopin"
  ];

  const renderProjects = () => {
    return (
      projects.map((project: string) => (
        <VisibilitySensor>
          {({ isVisible }) => (
            <Spring 
              delay={300} 
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateX(0)"
                  : "translateX(200px)",
                }}>
              {(props) => (
                <h2 className="projects-title" style={{ ...props }}>{project}</h2>
              )}
            </Spring>
          )}
        </VisibilitySensor>
      ))
    )
  }
  return (
    <div className="Projects">
      <h1 className="text-center pt-5 pb-5">Projects</h1>
      <div className="p-3 d-flex justify-content-center align-items-center flex-column">
        { renderProjects() }
      </div>
    </div>
  );
}

export default Projects;
