import React from 'react'
import Practice from './practice'

export default class PracticeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      session: 0,
      current: 0
    }
    this.boxCards = this.boxCards.bind(this)
    this.next = this.next.bind(this)
  }
  next() {
    const { session, current } = this.state
    if (session === 0 && current === 0) {
      this.setState({
        session: 1,
        current: 0
      })
    }
    else if (session === 1 && current === 1) {
      this.setState({
        session: 2,
        current: 0
      })
    }
    else if (session === 2 && current === 2) {
      this.setState({
        session: 0,
        current: 0
      })
    }
    else {
      this.setState({
        current: current + 1
      })
    }
  }
  boxCards() {
    const { cards } = this.props
    const boxOne = []
    const boxTwo = []
    const boxThree = []
    cards.forEach(card => {
      switch (card.difficultyIndex) {
        case 0 :
          boxOne.push(card)
          break
        case 1 :
          boxTwo.push(card)
          break
        default :
          boxThree.push(card)
      }
    })
    return [boxOne, boxTwo, boxThree]
  }
  render() {
    const { current } = this.state
    const boxes = this.boxCards()
    if (boxes[current].length === 0) {
      this.next()
    }
    return (
      <Practice
        next={this.next}
        cards={boxes[current]}
        handleDifficulty={this.props.handleDifficulty}
      />
    )
  }
}
