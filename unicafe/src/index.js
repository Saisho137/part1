import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({value, text}) => {
  return (
    <div>
    <p>{text}{value}</p>
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />
      <h2>statistics</h2>
      <Display value={good} text={'Good: '} />
      <Display value={neutral} text={'Neutral: '} />
      <Display value={bad} text={'Bad: '} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
