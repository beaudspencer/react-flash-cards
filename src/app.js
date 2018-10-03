import React from 'react'
import Form from './form.js'
import Navbar from './navbar.js'
import hash from './hash.js'
import CardList from './card-list.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.savedCards = localStorage.getItem('cards')
    this.state = {
      cards: JSON.parse(this.savedCards) || [],
      view: hash.parse(location.hash) || 'list'
    }
    this.addCard = this.addCard.bind(this)
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({view: hash.parse(location.hash)})
    })
    window.addEventListener('beforeunload', () => {
      const myCards = JSON.stringify(this.state.cards)
      localStorage.setItem('cards', myCards)
    })
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
        {this.state.view === 'new' && <Form submit={this.addCard}/>}
        {this.state.view === 'list' && <CardList cards={this.state.cards}/>}
      </React.Fragment>
    )
  }
}
