import React from 'react'
import Card from './card.js'

export default function CardList(props) {
  return (
    <div className="row">
      {props.cards.map((card, index) => {
        return <Card key={index} card={card}/>
      })}
    </div>
  )
}
