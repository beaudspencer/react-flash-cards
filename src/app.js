import React from 'react'
import Form from './form.js'
import {appState} from './app-state.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = appState
    this.addCard = this.addCard.bind(this)
  }
  addCard(card) {
    const addCard = this.state.cards.map(card => Object.assign({}, card))
    addCard.push(card)
    this.setState({cards: addCard})
  }
  render() {
    return (
      <Form submit={this.addCard}/>
    )
  }
}
