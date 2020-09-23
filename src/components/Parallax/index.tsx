import React, { useEffect } from "react";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

export default function ParallaxPage() {
  const h2Styles = {
    fontSize: "82px",
  };
  return <div className="w-100 d-flex flex-column">
    <div className="screen-height bg-dark">
      <VisibilitySensor>
        {({ isVisible }) => (
          <Spring delay={1000} to={{ opacity: isVisible ? 1 : 0 }}>
            {({ opacity }) => (
              <h2 style={{ ...h2Styles, opacity }}>Hello</h2>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </div>
    <div className="screen-height bg-light overflow-hidden">
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Spring
            delay={1000}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateX(0)"
                : "translateX(200px)",
            }}
          >
            {(props) => (
              <h2 style={{ ...h2Styles, ...props }}>World</h2>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </div>
    <div className="screen-height bg-dark overflow-hidden">
      <VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(0)"
                  : "translateY(400px)",
              }}
            >
              {(props) => <h2 style={{ ...h2Styles, ...props }}>!!!</h2>}
            </Spring>
          )}
      </VisibilitySensor>
    </div>
  </div>
}
