import React from 'react'
import Form from './form.js'
import Navbar from './navbar.js'
import hash from './hash.js'
import CardList from './card-list.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: JSON.parse(localStorage.getItem('cards')) || [],
      view: {
        path: hash.parse(location.hash).path || 'list',
        params: hash.parse(location.hash).params
      },
      nextId: JSON.parse(localStorage.getItem('id')) || 0
    }
    this.submitHandler = this.submitHandler.bind(this)
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({view: hash.parse(location.hash)})
    })
    window.addEventListener('beforeunload', () => {
      const myCards = JSON.stringify(this.state.cards)
      localStorage.setItem('cards', myCards)
      const currentId = JSON.stringify(this.state.nextId)
      localStorage.setItem('id', currentId)
    })
  }
  submitHandler(card) {
    if (this.state.view.path === 'edit') {
      const changeCardIndex = this.state.cards.findIndex(curr => curr.cardId === card.cardId)
      const before = this.state.cards.slice(0, changeCardIndex)
      const after = this.state.cards.slice(changeCardIndex + 1)
      const newCards = [...before, card, ...after]
      this.setState({
        cards: newCards
      })
      location.hash = '#list'
    }
    else if (this.state.view.path === 'new') {
      const addCard = this.state.cards.slice()
      addCard.push(card)
      this.setState({cards: addCard,
        nextId: this.state.nextId + 1})
    }
  }
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        {(this.state.view.path === 'new' || this.state.view.path === 'edit') && <Form submit={this.submitHandler} nextId={this.state.nextId} cards={this.state.cards} params={this.state.view.params} mode={this.state.view.path}/>}
        {this.state.view.path === 'list' && <CardList cards={this.state.cards}/>}
      </React.Fragment>
    )
  }
}
