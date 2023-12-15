import './App.css'
import { useState } from 'react'
import Question from './components/Question'
import Result from './components/Result'
import questions from './Questions'

const data = questions

function App() {

  const [count,setCount] = useState(0)
  const [score,setScore] = useState(0)
  const [toggle,setToggle] = useState(true)

  const optionHandle = (e) => {
    setCount(prevState => prevState+1)
    if (e.target.attributes.iscorrect.value==="true"){
      setScore(prevState => prevState+1)
    }
  }

  const handleToggle = () => {
    setToggle(prevState => !prevState)
  }

  const resetQuestion = () => {
    setCount(0)
    setScore(0)
  }

  const mainStyle ={
    backgroundColor: toggle?"black":"white"
  }

  const nameStyle ={
    color: toggle?"white":"black"
  }

  const toggleStyle = {
    color: toggle?"black":"white",
    backgroundColor: toggle?"white":"black"
  }

  const containerStyle = {
    backgroundColor: toggle?"white":"black"
  }

  const btnStyle = {
    color: toggle?"white":"black",
    backgroundColor: toggle?"black":"white"
  }

  const textStyle = {
    color: toggle?"black":"white"
  }

  return (
    <div className="main" style={mainStyle}>
      <div className="app">
        <div className="navbar">
          <div className="name" style={nameStyle}>Quiz App</div>
          <div className="toggle" onClick={handleToggle} style={toggleStyle}>Toggle</div>
        </div>
        <div className="container" style={containerStyle}>
          {count<5?
          (
          <Question 
            question={data[count].text} 
            option={data[count].options} 
            num={count+1} 
            key={count} 
            onSmash={optionHandle} 
            btnStyle={btnStyle} 
            numStyle={textStyle}/>
          )
          :
          (
          <Result 
          score={score} 
          textStyle={textStyle} 
          btnStyle={btnStyle} 
          onSmash={resetQuestion}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
