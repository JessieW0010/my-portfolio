import React from 'react';
import { animated, useTransition, useSpring } from 'react-spring'
import {
  withRouter,
  RouteComponentProps, 
  NavLink
} from 'react-router-dom';

interface INavBar extends RouteComponentProps {

}

function NavBar({
  location
}: INavBar) {
  const { pathname } = location;

  const items = [
    { key: "/", text: "INTRO" },
    { key: "/aboutme", text: "ABOUT ME" },
    { key: "/projects", text: "PROJECTS" },
    { key: "/contact", text: "CONTACT" },
  ];

  const transitions = useTransition(items, item => item.key, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' },
    config: { duration: 1000 }
  });

  return (
    <div className="NavBar w-100 p-2">
        <div className="pb-2 Logo-container">
          <NavLink className="Logo" to="/">
            <p className="Logo-text p-0 m-0 pl-2">Jessie</p>
            <p className="Logo-text p-0 m-0 pl-2">Wang</p>
          </NavLink>
        </div>
        { transitions.map(({ item, props, key }) => <animated.div className="ml-2" key={key} style={props}>
          <NavLink className={pathname === item.key ? "text-decoration-underline" : ""} to={item.key}>{item.text}</NavLink>
        </animated.div>) }
      </div>
  );
}

export default withRouter(NavBar);