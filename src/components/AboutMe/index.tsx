import React from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.css';

function AboutMe() {
  const [item, setItem] = React.useState<string>("default");
  const calc = (x: any, y: any) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  return (
      <div className="AboutMe screen-height row m-0">
        <div 
          className="col-md-8 d-flex justify-content-center align-items-center" 
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
          >
          <div className="background"/>
          <animated.div className="guitar things-i-love" 
            // @ts-ignore
            style={{ transform: props.xy.interpolate((x:any, y:any) => `translate3d(${x / 6}px,${y / 6}px,0)`) }} />
          <animated.div className="erlenmyer things-i-love" 
            // @ts-ignore
            style={{ transform: props.xy.interpolate((x:any, y:any) => `translate3d(${x / 6}px,${y / 6}px,0)`) }} />
          <animated.div className="aboutme-me" 
            // @ts-ignore
            style={{ transform: props.xy.interpolate((x:any, y:any) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`) }} />
          <animated.div className="ipad things-i-love" 
            // @ts-ignore
            style={{ transform: props.xy.interpolate((x: any, y:any) => `translate3d(${x / 6}px,${y / 6}px,0)`) }} />
          <animated.div className="rubiks things-i-love" 
            // @ts-ignore
            style={{ transform: props.xy.interpolate((x:any, y:any) => `translate3d(${x / 6}px,${y / 6}px,0)`) }} />
          <animated.div className="onion things-i-love" 
            onClick={() => setItem("CLICKED I love to play music")}
            onMouseOver={() => setItem("I love to play music")}
            // @ts-ignore
            style={{ transform: props.xy.interpolate((x:any, y:any) => `translate3d(${x / 6}px,${y / 6}px,0)`) }} />
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <h1>{item}</h1>
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