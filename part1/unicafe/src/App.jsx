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
    <td>{text} {value}</td>
  )
}
const Statistics = ({good, neutral, bad}) => {
  if (good > 0 || neutral > 0 || bad > 0) {
    return (
      <div> 
        <h1>statistics</h1>
        <table>
          <tbody>
            <tr>        
              <StatisticsLine text="good" value={good}/>
            </tr>    
            <tr>
             <StatisticsLine text="neutral" value={neutral}/>
            </tr>
            <tr>
             <StatisticsLine text="bad" value={bad}/>
            </tr>
            <tr>
             <StatisticsLine text="all" value={good + neutral + bad}/>
            </tr>
            <tr>
             <StatisticsLine text="average" value={(good + neutral + bad) / 3}/>
            </tr>
            <tr>
             <StatisticsLine text="positive" value={(good / (good + neutral + bad)) * 100 + "%"}/>
            </tr>
          </tbody>
        </table>
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