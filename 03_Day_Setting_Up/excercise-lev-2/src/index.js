/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import htmlImage from './images/html_logo.png'
import cssImage from './images/css_logo.png'
import jsImage from './images/javascript_logo.png'
import reactImage from './images/react_logo.png'
import fotoBrian from './images/foto_brian.jpg'


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
/* submit ex level 2*/
const subscribe = (<div className='subscribe'><h1>Subscribe</h1></div>)
const signMessage = (<div className='sign'><p>Sign up with oyr email address to receive news and updates</p></div>)
const inputs = (<div className='inputs'><input type='text' placeholder='First Name'></input><input type='text' placeholder='Last Name'></input><input type='email' placeholder='Email'></input></div>)
const button = (<div className='button'><button type='submit'>Subscribe</button></div>)
/*end excersise level 2*/ 

/*excersise card*/
const cardImage = (<div className='cardImage'><img src={fotoBrian} alt='Brian foto'></img></div>)
const name = (<div className='completeName'><h1>Brian Belaj</h1><i class="bi bi-check-circle-fill"></i></div>)
const level = (<div className='level'><h2>Junior Frontend Developer, Italy</h2></div>)
const skills = (<div><div className='titleSkills'><h3>Skills</h3></div><div className='allSkills'><span class='singleSkill'>Html</span><span class='singleSkill'>CSS</span><span class='singleSkill'>Javascript</span><span class='singleSkill'>Bootstrap</span><span class='singleSkill'>Regex</span><span class='singleSkill'>React?</span></div><div className='joined'><i class="bi bi-clock-history"></i><span>Joined on 28 July, 2022</span></div></div>)
const app = (
  <div className='app'>
    {cardImage}
    {name}
    {level}
    {skills}
  </div>
  
)

const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement)
