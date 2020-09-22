import React from 'react';
import {useSpring, animated} from 'react-spring'

function Intro() {
  const introPicProps = useSpring({ 
    from: { opacity: 0 },
    to: { opacity: 1 }, 
    config: { duration: 1000 }
  });
  const h1Props = useSpring({ 
    from: { marginLeft: -50 },
    to: { marginLeft: 0 },
    config: { duration: 500 }
  });
  const h2Props = useSpring({ 
    from: { marginLeft: -50 },
    to: { marginLeft: 0 },
    config: { duration: 500 }
  });
  return (
    <div className="Intro screen-height d-flex justify-content-center align-items-center">
      <animated.div style={introPicProps}>
        <img src={require("../../assets/images/intropic.png")} alt="Picture of girl at a computer" width="500"/>
      </animated.div>
      <div className="Introduction d-flex justify-content-center align-items-center flex-column text-white">
        <animated.h1 style={h1Props}>
          Hi, I'm Jessie
        </animated.h1>
        <animated.h1 style={h2Props}>
          I'm a full-stack developer
        </animated.h1>
      </div>
    </div>
  );
}

export default Intro;
