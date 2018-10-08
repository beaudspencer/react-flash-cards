import React from 'react'
import Card from './card'

export default function Cards(props) {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row justify-content-start">
          {props.cards.map((card) => {
            return <Card
              id={card.cardId}
              key={card.cardId}
              remove={props.remove}
              card={card}/>
          })}
        </div>
      </div>
    </React.Fragment>
  )
}
