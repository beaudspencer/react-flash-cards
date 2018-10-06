import React from 'react'

export default function ProgressBar(props) {
  const style = {
    progress: {
      width: props.percent + '%'
    }
  }
  return (
    <div className="progress w-50 mx-auto mb-5">
      <div
        className="progress-bar"
        role="progressbar"
        style={style.progress}
      >
        {props.percent + '%'}
      </div>
    </div>
  )
}
