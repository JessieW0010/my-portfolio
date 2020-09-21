import React from 'react';

function NavBar() {
  return (
    <div className="NavBar w-100 p-2 d-flex justify-content-between">
      <div className="NavBarItem">
        <a>LOGO</a>
      </div>
      <div className="NavBarItem">
        <a className="ml-2 mr-2">INTRO</a>
        <a className="ml-2 mr-2">ABOUT ME</a>
        <a className="ml-2 mr-2">PROJECTS</a>
      </div>
      <div className="NavBarItem">
        <a>CONTACT</a>
      </div>
    </div>
  );
}

export default NavBar;
