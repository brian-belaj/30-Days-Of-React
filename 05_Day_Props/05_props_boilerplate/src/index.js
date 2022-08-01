import React from 'react'
import ReactDOM from 'react-dom'
import jsLogo from './images/js_logo.png'
import htmlLogo from './images/html_logo.png'
import cssLogo from './images/css_logo.png'
import reactLogo from './images/react_logo.png'

/*const TitleSkills = () =>  (<div className='skillsTitle'><h1>Front End Tecnologies</h1></div>)
const Images = (props) => {
  return (
    <div className='logos'>
      <img src={props.html} alt='html logo'/>
      <img src={props.css} alt='css logo'/>
      <img src={props.js} alt='js logo'/>
      <img src={props.react} alt='ract logo'/>
    </div>
  )
} exercise one */ 

const App = () =>{ 
  /*return(
  <div className='app'>
    <TitleSkills />
    <Images html={htmlLogo} css={cssLogo} js={jsLogo} react={reactLogo} />
  </div>
) exercise one*/
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
