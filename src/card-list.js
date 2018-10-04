import React from 'react'
import Card from './card.js'
import hash from './hash'

export default function CardList(props) {
  function cardInfo(event) {
    const newLocation = {
      path: 'edit',
      params: {
        cardId: event.target.id
      }
    }
    location.hash = hash.stringify(newLocation)
  }
  return (
    <React.Fragment>
      {props.cards.length === 0 && <div className="text-center mt-5">
        <h2>You have no cards saved</h2>
        <a className="btn btn-primary mt-3" role="button" href="#new">Make a Card</a>
      </div>}
      {props.cards.length > 0 &&
      <div className="container-fluid">
        <div className="row justify-content-start">
          {props.cards.map((card, index) => {
            return <Card id={index} function={cardInfo} key={index} card={card}/>
          })}
        </div>
      </div>
      }
    </React.Fragment>
  )
}
