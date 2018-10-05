import React from 'react'

const style = {
  card: {
    width: '42rem'
  }
}
export default function QuizCard(props) {
  return (
    <div className="card d-inline-block" style={style.card}>
      <div className="card-body">
        <h3 className="card-title">{props.card.question}</h3>
        <div onClick={props.toggle}>
          <i
            className={
              props.shown ? 'fas fa-angle-down' : 'fas fa-angle-right'
            }>
          </i>
          <p className="card-text d-inline-block ml-2">Show Answer</p>
        </div>
        <p className={props.shown ? 'card-text' : 'd-none'}>
          {props.card.answer}
        </p>
      </div>
    </div>
  )
}
