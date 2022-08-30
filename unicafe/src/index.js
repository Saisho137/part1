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

const Statistics = ({good,neutral,bad,All}) => {
  if (good > 0 || neutral > 0 || bad > 0) {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td><Display text={'Good: '} /></td>
              <td><Display value={good} /></td>
            </tr>
            <tr>
            <td><Display text={'Neutral: '} /></td>
              <td><Display value={neutral} /></td>
            </tr>
            <tr>
            <td><Display text={'Bad: '} /></td>
              <td><Display value={bad} /></td>
            </tr>
            <tr>
            <td><Display text={'All: '} /></td>
              <td><Display value={All} /></td>
            </tr>
            <tr>
              <td><Display text={'Average: '} /></td>
              <td><Display value={(good - bad)/All} /></td>
            </tr>
            <tr>
              <td><Display text={'Positive: '} /></td>
              <td><Display value={(good*100)/All} /></td>
            </tr>
          </tbody>
        </table>  
      </div>
    )
  } else {
    return(
      <p>No feedback given</p>
    )
  }
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const All = () => good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} All={All()} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
