import React from 'react'

const style = {
  button: {
    width: '4rem'
  },
  container: {
    position: 'absolute',
    bottom: '45vh',
    width: '100%'
  }
}

export default function DifficultyButtons(props) {
  return (
    <div style={style.container}>
      <button
        onClick={props.handleDifficulty}
        className="btn btn-primary mr-2"
        value="pass"
        style={style.button}>Pass</button>
      <button
        onClick={props.handleDifficulty}
        className="btn btn-danger ml-2"
        value="fail"
        style={style.button}>Fail</button>
    </div>
  )
}
