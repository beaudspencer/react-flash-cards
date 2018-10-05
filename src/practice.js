import React from 'react'
import QuizCard from './quiz-card.js'

export default class Practice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {current: 0,
      cards: this.props.cards,
      shown: false
    }
    this.nextCard = this.nextCard.bind(this)
    this.prevCard = this.prevCard.bind(this)
    this.toggleAnswer = this.toggleAnswer.bind(this)
    this.style = {
      left: {
        top: '8rem',
        left: '10rem'
      },
      right: {
        top: '8rem',
        right: '10rem'
      }
    }
  }
  nextCard() {
    this.setState({current: this.state.current + 1,
      shown: false})
  }
  prevCard() {
    this.setState({current: this.state.current - 1,
      shown: false})
  }
  toggleAnswer() {
    this.setState({shown: !this.state.shown})
  }
  render() {
    return (
      <div className="text-center mt-5">
        <div
          className="d-inline-block position-absolute" style={this.style.left}>
          <i
            onClick={this.prevCard}
            className={
              (this.state.current > 0)
                ? 'fas fa-angle-double-left' : 'd-none'}
          ></i>
        </div>
        <QuizCard card={this.state.cards[this.state.current]}
          toggle={this.toggleAnswer}
          shown={this.state.shown}
        />
        <div
          className="d-inline-block position-absolute" style={this.style.right}>
          <i
            onClick={this.nextCard}
            className={(this.state.current < this.state.cards.length - 1)
              ? 'fas fa-angle-double-right'
              : 'd-none'
            }
          ></i>
        </div>
      </div>
    )
  }
}
