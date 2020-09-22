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
  ];

  const transitions = useTransition(items, item => item.key, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' },
    config: { duration: 1000 }
  });

  const logoProps = useSpring({ 
    from: { transform: 'translate3d(-60px,0,0)' },
    to: { transform: 'translate3d(0px,0,0)' }, 
    config: { duration: 1000 }
  });

  const contactProps = useSpring({ 
    from: { transform: 'translate3d(60px,0,0)' },
    to: { transform: 'translate3d(0px,0,0)' }, 
    config: { duration: 1000 }
  });

  return (
    <div className="NavBar w-100 p-2 d-flex justify-content-between">
        <animated.div className="ml-2 mr-2" style={logoProps}><NavLink className={pathname === "/" ? "text-decoration-underline" : ""} to="/">LOGO</NavLink></animated.div>
      <div className="d-flex justify-content-between">
        { transitions.map(({ item, props, key }) => <animated.div className="ml-2 mr-2" key={key} style={props}>
          <NavLink className={pathname === item.key ? "text-decoration-underline" : ""} to={item.key}>{item.text}</NavLink>
        </animated.div>) }
      </div>
        <animated.div className="ml-2 mr-2" style={contactProps}><NavLink className={pathname === "/contact" ? "text-decoration-underline" : ""} to="/contact">CONTACT</NavLink></animated.div>
      </div>
  );
}

export default withRouter(NavBar);