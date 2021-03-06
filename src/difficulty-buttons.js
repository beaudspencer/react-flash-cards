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
    <div style={style.container} onClick={props.handleDifficulty}>
      <button
        className="btn btn-primary mr-2"
        value="pass"
        style={style.button}>Pass</button>
      <button
        className="btn btn-danger ml-2"
        value="fail"
        style={style.button}>Fail</button>
    </div>
  )
}
