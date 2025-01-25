import { useState } from 'react'

const Header = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  if (good > 0 || neutral > 0 || bad > 0) {
    return (
      <div> 
        <h1>Statistics</h1>
        <h3>good {good}</h3>
        <h3>neutral {neutral}</h3>
        <h3>bad {bad}</h3>
        <h3> all {good + neutral + bad}</h3>
        <h3> average {(good + neutral + bad) / 3}</h3>
        <h3> positive {(good / (good + neutral + bad)) * 100}%</h3>
      </div>
    )
  }
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const title = "give feedback"
  const increaseByOne = () => {
    console.log("increasing, value before: ", good)
    setGood(good + 1)
  }
  const decreaseByOne = () => {
    console.log("decreasing, value before: ", good)
    setBad(bad + 1)
  }
  const doNothing = () => {
    console.log("doing nothing, value before: ", good)
  }

  return (
    <div>
      <Header title={title}/>
      <Button onClick={increaseByOne} text='good' />
      <Button onClick={doNothing} text='neutral' />
      <Button onClick={decreaseByOne} text='bad' />
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App