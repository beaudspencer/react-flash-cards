import React from 'react'
import Practice from './practice'

export default class PracticeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      session: 0,
      current: 0,
      boxes: {
        one: null,
        two: null,
        three: null
      }
    }
    this.boxCards = this.boxCards.bind(this)
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
    const { boxes } = this.state
    const { cards } = this.props
    const boxOne = boxes.one.slice()
    const boxTwo = boxes.two.slice()
    const boxThree = boxes.three.slice()
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
    this.setState({
      boxes: {
        one: boxOne,
        two: boxTwo,
        three: boxThree
      }
    })
  }
  render() {
    const { boxes, current } = this.state
    return (
      <Practice
        next={this.next}
        cards={boxes[current]}
        handleDifficult={this.props.handleDifficulty}
      />
    )
  }
}
