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

const StatisticsLine = ({text, value}) => {
  return (
    <h3>{text} {value}</h3>
  )
}
const Statistics = ({good, neutral, bad}) => {
  if (good > 0 || neutral > 0 || bad > 0) {
    return (
      <div> 
        <h1>Statistics</h1>
        <StatisticsLine text="good" value={good}/>
        <StatisticsLine text="neutral" value={neutral}/>
        <StatisticsLine text="bad" value={bad}/>
        <StatisticsLine text="all" value={good + neutral + bad}/>
        <StatisticsLine text="average" value={(good + neutral + bad) / 3}/>
        <StatisticsLine text="positive" value={(good / (good + neutral + bad)) * 100 + "%"}/>
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
    setNeutral(neutral + 1)
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