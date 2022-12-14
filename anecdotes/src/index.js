import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points,setPoints] = useState([0,0,0,0,0,0])
  const copy = [ ...points ]

  console.log(copy)
  console.log(selected)
  var maximum = Math.max( ...copy )
  console.log(maximum)

  const HandleOnClick = () => {
    return(
      copy[selected]+=1,
      setPoints(copy)
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <Button onClick={HandleOnClick} text="Vote" />
      <Button onClick={() => {if(selected<anecdotes.length-1) {
          setSelected(selected + 1)} else{
            setSelected(0)}}
      } text="Next Anecdote" />
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[copy.indexOf(maximum)]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)