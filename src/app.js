import React from 'react'
import Form from './form.js'
import {appState} from './app-state.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = appState
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    const newCardData = new FormData(event.target)
    const newCard = {
      question: newCardData.get('question'),
      answer: newCardData.get('answer')
    }
    const addCard = this.state.cards.map(card => Object.assign({}, card))
    addCard.push(newCard)
    this.setState({cards: addCard})
    event.target.reset()
  }
  render() {
    return (
      <Form submit={this.handleSubmit}/>
    )
  }
}
