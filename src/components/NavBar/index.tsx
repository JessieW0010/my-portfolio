import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring'
import {
  withRouter,
  RouteComponentProps, 
  NavLink
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface INavBar extends RouteComponentProps {

}

function NavBar({
  location
}: INavBar) {
  const { pathname } = location;
  const [isMenuOpen, setMenu] = useState<boolean>(false);

  const items = [
    { key: "/", text: "INTRO" },
    { key: "/aboutme", text: "ABOUT ME" },
    { key: "/projects", text: "PROJECTS" }
  ];

  const transitions = useTransition(items, item => item.key, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' },
    config: { duration: 1000 }
  });

  const toggleMenu = () => {
    setMenu(!isMenuOpen);
  }

  return (
    <div className="NavBar w-100 p-2">
        <div className="pb-2 Logo-container w-100">
          <NavLink className="Logo" to="/">
            <p className="Logo-text p-0 m-0 pl-2">Jessie</p>
            <p className="Logo-text p-0 m-0 pl-2">Wang</p>
          </NavLink>
        </div>
        <div className="fit-content">
          { isMenuOpen && transitions.map(({ item, props, key }) => <animated.div className="ml-2" key={key} style={props}>
            <NavLink className={`text-white ${pathname === item.key ? "text-decoration-underline" : ""}`} to={item.key}>{item.text}</NavLink>
          </animated.div>) }
          <div className="d-flex justify-content-center menu-btn" onClick={toggleMenu}>
            <FontAwesomeIcon className="text-white" icon={isMenuOpen ? faChevronUp : faChevronDown}/>
          </div>
        </div>
        <NavLink className={`contact-btn p-3 text-white ${pathname === "/contact" ? "text-decoration-underline" : ""}`} to="/">CONTACT</NavLink>
      </div>
  );
}

export default withRouter(NavBar);