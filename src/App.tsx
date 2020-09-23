import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import ParallaxPage from './components/Parallax';
import { useTransition, animated } from 'react-spring';
import {
  Route,
  Switch,
  RouteComponentProps,
  withRouter
} from 'react-router-dom';

interface IAppProps extends RouteComponentProps {
  
}

function App({ location }: IAppProps) {
  const transitions = useTransition(location, location => location.pathname, {
    from: {
      position: 'absolute',
      width: '100%',
      opacity: 0,
      transform: 'translate(100%,0)'
    },
    enter: { opacity: 1, transform: 'translate(0%,0)' },
    leave: { opacity: 0, transform: 'translate(-50%,0)' }
  });
  return (
    <div className="App">
      <NavBar/>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route path="/projects" component={Projects} />
            <Route path="/parallax" component={ParallaxPage} />
            <Route path="/" component={Intro} />
          </Switch>
        </animated.div>
      ))}
    </div>
  );
}

export default withRouter(App);
