import React from 'react'
import Form from './form.js'
import Navbar from './navbar.js'
import hash from './hash.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      view: 'list'
    }
    this.addCard = this.addCard.bind(this)
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({view: hash.parse(location.hash)})
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
      </React.Fragment>
    )
  }
}
