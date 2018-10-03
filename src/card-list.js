import React from 'react'
import Card from './card.js'

export default function CardList(props) {
  return (
    <div className="row ml-1">
      <ul className="list-inline">
        {props.cards.map((card, index) => {
          return <Card key={index} card={card}/>
        })}
      </ul>
    </div>
  )
}
