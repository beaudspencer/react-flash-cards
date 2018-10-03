import React from 'react'

const style = {
  card: {
    width: '16rem'
  }
}

export default function Card(props) {
  return (
    <div className="card" style={style.card}>
      <div className="card-body">
        <h5 className="card-title">{props.card.question}</h5>
        <p className="card-text">{props.card.answer}</p>
      </div>
    </div>
  )
}
