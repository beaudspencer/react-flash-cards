import React from 'react'

const style = {
  card: {
    width: '20rem',
    height: '12rem'
  }
}

export default function Card(props) {
  return (
    <li className="list-inline-item ml-3">
      <div className="card" style={style.card}>
        <div className="card-body">
          <h5 className="card-title">{props.card.question}</h5>
          <p className="card-text">{props.card.answer}</p>
        </div>
      </div>
    </li>
  )
}
