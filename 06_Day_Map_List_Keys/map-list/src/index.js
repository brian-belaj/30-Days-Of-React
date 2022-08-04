import React from 'react'
import ReactDOM from 'react-dom'

const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false; 
  return num > 1;
}
function isEven(n) {
  return n % 2 == 0;
}
function isOdd(n) {
  return Math.abs(n % 2) == 1;
}
const Square = ({number, bg}) => <div className='square' style={{background:bg}}>{number}</div>
const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,21,23,24,25,26,27,28,29,30,31]
const Numbers = ()=>{
  let listnum= numbers.map(number => {
    const color = ()=>{
      if(isPrime(number)){
        return '#EB4747'
      } else if (isEven(number)){
        return '#9FC088'
      } else {
        return '#F4E06D'
      }
    }
    return <Square key={number} number={number} bg={color()}/>
  })
  return(
    <div>
      <h2 style={{textAlign:'center'}}>NUMBER GENERATOR</h2>
      <div className='numContainer'>{listnum}</div>
    </div>
  )
}
const App = () =>{
  return (
  <div className='container'>
    <Numbers/>
  </div>
)} 

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)