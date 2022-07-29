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
const app = (
  <div className="app">
    <Html/>
    <Css/>
    <JsLogo/>
    <ReactLogo/>
  </div>
);

const rootElement = document.getElementById("root");

ReactDOM.render(app, rootElement);
