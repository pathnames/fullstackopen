import { useState } from 'react'

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}
const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const MaxAnecdote = ({allVotes, anecdotes}) => {
  let max = 0
  let maxIndex = 0
  for (let i = 0; i < allVotes.length; i++) {
    if (allVotes[i] > max) {
      max = allVotes[i]
      maxIndex = i
    }
  }
  if (allVotes[maxIndex] > 0) {
    return (
      <div>
        <h1>Anecdote with most votes</h1>
        {anecdotes[maxIndex]}
        <br />
        has {max} votes
      </div>
    )
  }
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const handleClick = () => {
    setSelected(getRandomInt(anecdotes.length))
  }

  const [allVotes, setAllVotes] = useState(new Array(anecdotes.length).fill(0))
  const handleVoteClick = () => {
    const copy = [...allVotes]
    copy[selected] += 1
    setAllVotes(copy)
    console.log(copy)
  }
  return (
    <div>
      {anecdotes[selected]}
      <br />
      <Button handleClick={handleVoteClick} text="vote" />
      <Button handleClick={handleClick} text="next anecdote" />
      <MaxAnecdote allVotes={allVotes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App