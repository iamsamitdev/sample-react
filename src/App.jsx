import './Style.css'

import { useState, useEffect } from 'react'

// function App() {
//   return <h1>Hello World</h1>
// }

const heading = {
  color: 'green',
  fontSize: '80px'
}

const heading2 = {
  border: '1px solid red'
}

// Arrow function
const App = () => {

  // Create Variable
  const fname = 'John Doe'
  const age = 35

  // Create State age
  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState(0)

  // การใช้ useEffect ในการทำงานหลังจาก render แล้ว
  useEffect(() => {
    const intervalId = setInterval(() => {
        console.log(timer)
        setTimer(timer => timer + 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])


  return (
    <>
      <button onClick={ () => setCount(count + 1) }>Up</button>
      <h1>{ count }</h1>
      <button onClick={ () => setCount(count - 1) }>Down</button>

      <h1>{ timer }</h1>

      <h1 style={{color:'red', fontSize:'80px'}}>Hello World</h1>
      <h2 style={{ ...heading, ...heading2 }}>Hello Somthing</h2>
      <p className={'myStyle myContent'}>Test somthing</p>

      <p>Hello { fname }  Your age is { age }</p>
    </>
  )
}

export default App
