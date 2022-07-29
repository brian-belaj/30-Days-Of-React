import React from "react";
import ReactDOM from "react-dom";
import htmlImg from "./images/html_logo.png";
import cssImage from "./images/css_logo.png";
import jsImage from "./images/javascript_logo.png";
import reactImage from "./images/react_logo.png";

const Html = () => {
  return (
    <div>
      <img src={htmlImg} alt="Html logo" />
    </div>
  );
};
const Css = () => {
  return (
    <div>
      <img src={cssImage} alt="Css logo" />
    </div>
  );
};
const JsLogo = () => {
  return (
    <div>
      <img src={jsImage} alt="Js logo" />
    </div>
  );
};
const ReactLogo = () => {
  return (
    <div>
      <img src={reactImage} alt="React logo" />
    </div>
  );
};
const ColorOne = () => {
return (
  <div className="color1 color">#518cef</div>
)
}
const ColorTwo = () => {
  return (
    <div className="color2 color">#3b10c4</div>
  )
  }
  const ColorThree = () => {
    return (
      <div className="color3 color">#9aede6</div>
    )
    }
    const ColorFour = () => {
      return (
        <div className="color4 color">#8ee763</div>
      )
      }
      const ColorFive = () => {
        return (
          <div className="color5 color">#a30dd0</div>
        )
        }
const app = (
  <div className="app">
    <ColorOne/>
    <ColorTwo/>
    <ColorThree/>
    <ColorFour/>
    <ColorFive/>
  </div>
);

const rootElement = document.getElementById("root");

ReactDOM.render(app, rootElement);
