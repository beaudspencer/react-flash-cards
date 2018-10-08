import React from 'react'

export default function NoCards(props) {
  return (
    <div className="text-center mt-5">
      <h2>You have no cards saved</h2>
      <a className="btn btn-primary mt-3" role="button" href="#new">
    Make a Card
      </a>
    </div>
  )
}
