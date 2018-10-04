import React from 'react'

const style = {
  card: {
    width: '18rem',
    height: '12rem'
  }
}

export default function Card(props) {
  return (
    <div className="col mt-3">
      <div className="card" style={style.card}>
        <div className="card-body">
          <h5 className="card-title">{props.card.question}</h5>
          <p className="card-text">{props.card.answer}</p>
        </div>
        <div className="card-footer">
          <i className="fas fa-edit float-right" id={props.id} onClick={props.function}></i>
        </div>
      </div>
    </div>
  )
}
