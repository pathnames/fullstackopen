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
    setGood(good - 1)
  }
  const doNothing = () => {
    console.log("doing nothing, value before: ", good)
    setGood(good)
  }

  return (
    <div>
      <Header title={title}/>
      <Button onClick={increaseByOne} text='good' />
      <Button onClick={doNothing} text='neutral' />
      <Button onClick={decreaseByOne} text='bad' />
    </div>
  )
}

export default App