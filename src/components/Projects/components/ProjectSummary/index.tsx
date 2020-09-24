import React from "react";
import {isMobile} from 'react-device-detect';

function ProjectSummary() {
  const stack = [
    "React",
    "Redux",
    "Bootstrap",
    "Node.JS"
  ]

  const renderStack = () => {
    return (
      <ul>
        {stack.map((item: string) => <li>{item}</li>)}
      </ul>
    )
  }

  React.useEffect(() => console.log(isMobile), [])

  return (
    <div className={`ProjectSummary screen-height d-flex align-items-center flex-column bg-primary pt-5`}>
      <h1 className="text-white p-3">The Shoppies</h1>
      <div className="d-flex justify-content-center px-3 h-50">
        <img className="img-fluid" src={require("../../../../assets/images/project.png")} />
      </div>
      <div className="w-100 row p-3">
        <div className="col-sm-6 col-md-8 d-flex justify-content-center align-items-center pl-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </div>
        <div className={`col-sm-6 col-md-4 d-flex align-items-${isMobile ? "end" : "center"} flex-column pr-3`}>
          <h4>{isMobile ? "YOU SUCK" : "STACK"}</h4>
          {renderStack()}
        </div>
      </div>
    </div>
  );
}

export default ProjectSummary;
