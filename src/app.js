import React from 'react'
import Form from './form.js'
import Navbar from './navbar.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
    this.addCard = this.addCard.bind(this)
  }
  addCard(card) {
    const addCard = this.state.cards.slice()
    addCard.push(card)
    this.setState({cards: addCard})
  }
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Form submit={this.addCard}/>
      </React.Fragment>
    )
  }
}
