import React from 'react'
import Form from './form.js'
import Navbar from './navbar.js'
import hash from './hash.js'
import CardList from './card-list.js'
import PracticeContainer from './practice-container'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: JSON.parse(localStorage.getItem('cards')) || [],
      view: {
        path: hash.parse(location.hash).path || 'list',
        params: hash.parse(location.hash).params
      },
      nextId: JSON.parse(localStorage.getItem('id')) || 1
    }
    this.submitHandler = this.submitHandler.bind(this)
    this.findCard = this.findCard.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
    this.updateDifficulty = this.updateDifficulty.bind(this)
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({view: hash.parse(location.hash)})
    })
    window.addEventListener('beforeunload', () => {
      const myCards = JSON.stringify(this.state.cards)
      localStorage.setItem('cards', myCards)
      localStorage.setItem('id', this.state.nextId)
    })
  }
  deleteCard(card) {
    const deletedCardIndex = this.state.cards.findIndex(curr =>
      curr.cardId === card.cardId)
    const before = this.state.cards.slice(0, deletedCardIndex)
    const after = this.state.cards.slice(deletedCardIndex + 1)
    const newCards = [...before, ...after]
    this.setState({
      cards: newCards
    })
  }
  editCard(card) {
    const changeCardIndex = this.state.cards.findIndex(curr =>
      curr.cardId === card.cardId)
    const before = this.state.cards.slice(0, changeCardIndex)
    const after = this.state.cards.slice(changeCardIndex + 1)
    const newCards = [...before, card, ...after]
    this.setState({
      cards: newCards
    })
  }
  addCard(card) {
    card.cardId = this.state.nextId
    card.difficultyIndex = 0
    const addCard = this.state.cards.slice()
    addCard.push(card)
    this.setState({cards: addCard,
      nextId: this.state.nextId + 1})
  }
  submitHandler(card) {
    card.cardId ? this.editCard(card) : this.addCard(card)
    location.hash = '#list'
  }
  findCard() {
    const currentCard = Object.assign({},
      this.state.cards.find(card =>
        card.cardId === parseInt(this.state.view.params.cardId, 10)))
    return currentCard
  }
  currentView(path, card) {
    if (path === 'new' || path === 'edit') {
      return <Form submit={this.submitHandler} card={card}/>
    }
    else if (path === 'practice') {
      return <PracticeContainer
        cards={this.state.cards}
        handleDifficulty={this.updateDifficulty}
      />
    }
    else {
      return <CardList cards={this.state.cards} remove={this.deleteCard}/>
    }
  }
  updateDifficulty(value, index) {
    const card = Object.assign({}, this.state.cards[index])
    const before = this.state.cards.slice(0, index)
    const after = this.state.cards.slice(index + 1)
    if (value === 'fail') {
      card.difficultyIndex = 0
    }
    else {
      card.difficultyIndex++
    }
    const newCards = [...before, card, ...after]
    this.setState({
      cards: newCards
    })
  }
  render() {
    const card = this.findCard()
    return (
      <React.Fragment>
        <Navbar/>
        {this.currentView(this.state.view.path, card)}
      </React.Fragment>
    )
  }
}
