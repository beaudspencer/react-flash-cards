import React from 'react'
import Practice from './practice'

export default class PracticeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      boxes: {
        one: null,
        two: null,
        three: null
      }
    }
    this.boxCards = this.boxCards.bind(this)
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
        cards={boxes[current]}
        handleDifficult={this.props.handleDifficulty}
      />
    )
  }
}
