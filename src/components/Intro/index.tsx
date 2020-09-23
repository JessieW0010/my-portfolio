import React from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.css';

function Intro() {
  const calc = (x: any, y: any) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
  const transBackground = (x: any, y: any) => `translate3d(${x / 10}px,${y / 10}px,0)`;
  const transSteam = (x: any, y: any) => `translate3d(${x / 5}px,${y / 5}px,0)`;
  const transBase = (x: any, y: any) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;
  const transComputer = (x: any, y: any) => `translate3d(${x / 10}px,${y / 10}px,0)`;

  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div className="d-flex w-100 justify-content-center align-items-center screen-height Intro-container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div className="background" 
      // @ts-ignore
      style={{ transform: props.xy.interpolate(transBackground) }} />
      <animated.div className="right-steam" 
      // @ts-ignore
      style={{ transform: props.xy.interpolate(transSteam) }} />
      <animated.div className="left-steam" 
      // @ts-ignore
      style={{ transform: props.xy.interpolate(transSteam) }} />
      <animated.div className="base" 
      // @ts-ignore
      style={{ transform: props.xy.interpolate(transBase) }} />
      <animated.div className="computer" 
      // @ts-ignore
      style={{ transform: props.xy.interpolate(transComputer) }} />
    </div>
  )
}

export default Intro;
