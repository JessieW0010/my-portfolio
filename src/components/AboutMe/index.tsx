import React from "react";

function AboutMe() {
  return (
    <div className="AboutMe screen-height row m-0">
      <div className="col-md-4 d-flex justify-content-center align-items-center">
        <img className="img-responsive" src={require("../../assets/images/me.png")} alt="Picture of me" width="300"/>
      </div>
      <div className="col-md-8 d-flex justify-content-center align-items-center">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
