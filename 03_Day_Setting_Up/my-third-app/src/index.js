import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from './images/asabeneh.jpg'

const user = (
  <div>
   <img src={asabenehImage} alt='asabeneh image' />
  </div>
)
const welcome = "My Own 30 days of React";
const title = "Getting started";
const subtitle = "Javascript Library";
const author = {
  firstName: "Brian Belaj",
  lastName: "Belaj",
};
const date = "Jul 27, 2022";

// JSX element, header
const header = (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Student: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
);
const numOne = 3;
const numTwo = 2;

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const yearBorn = 1988;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {" "}
    {author.firstName} {author.lastName} is {age} years old
  </p>
);

const techs = ["HTML", "CSS", "Javascript"];
const techsFormatted = techs.map((tech) => <li>{tech}</li>);
// JSX element, main
const main = (
  <main>
    <div className="main-wrapper">
      <p>
        Prerequisite to get started{" "}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
)

const copyright = 'Copyright 2022'

// JSX element, footer
const footer = (
  <footer>
    <div className="footer-wrapper">
      <p>{copyright}</p>
    </div>
  </footer>
);

// JSX element, app, a container or a parent
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method takes two argument
ReactDOM.render(app, rootElement);
