/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import ReactDOM from 'react-dom'
import htmlImage from './images/html_logo.png'
import cssImage from './images/css_logo.png'
import jsImage from './images/javascript_logo.png'
import reactImage from './images/react_logo.png'


const htmlLogo = (
  <div>
    <img src={htmlImage} alt='asabeneh image' />
  </div>
)
const cssLogo = (
  <div>
    <img src={cssImage} alt='asabeneh image' />
  </div>
)
const reactLogo = (
  <div>
    <img src={reactImage} alt='asabeneh image' />
  </div>
)
const jsLogo = (
  <div>
    <img src={jsImage} alt='asabeneh image' />
  </div>
)
const tech = (<div className='title'><h1>Frontend Technologies</h1></div>)
const logos = (
  <div className='logos'>
    {htmlLogo}
    {cssLogo}
    {jsLogo}
    {reactLogo}
  </div>
)
const app = (
  <div className='app'>{tech}
  {logos}</div>
  
)

const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement)
