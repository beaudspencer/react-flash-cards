import React from 'react'
import hash from './hash.js'

const style = {
  card: {
    width: '18rem',
    height: '12rem'
  }
}

export default function Card(props) {
  const newLocation = {
    path: 'edit',
    params: {
      cardId: props.id
    }
  }
  return (
    <div className="col mt-3">
      <div className="card" style={style.card}>
        <div className="card-body">
          <h5 className="card-title">{props.card.question}</h5>
          <p className="card-text">{props.card.answer}</p>
        </div>
        <div className="card-footer">
          <a href="#list" onClick={() => {
            props.remove(props.card)
          }}>
            <i className="far fa-trash-alt float-right mr-1"></i>
          </a>
          <a href={hash.stringify(newLocation)}>
            <i className="fas fa-edit float-right mr-3" id={props.id}></i>
          </a>
        </div>
      </div>
    </div>
  )
}
