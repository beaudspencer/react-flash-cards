import React from 'react'
import QuizCard from './quiz-card.js'
import ProgressBar from './progress-bar.js'

export default class Practice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {current: 0,
      cards: this.props.cards,
      shown: false
    }
    this.style = {
      left: {
        top: '13rem',
        left: '14vw'
      },
      right: {
        top: '13rem',
        right: '14vw'
      },
      card: {
        top: '8rem'
      }
    }
    this.nextCard = this.nextCard.bind(this)
    this.prevCard = this.prevCard.bind(this)
    this.toggleAnswer = this.toggleAnswer.bind(this)
    this.calcPercentDone = this.calcPercentDone.bind(this)
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
  calcPercentDone() {
    return Math.floor(((this.state.current + 1) / this.state.cards.length) * 100)
  }
  render() {
    const percent = this.calcPercentDone()
    return (
      <div className="text-center mt-5">
        <ProgressBar percent={percent}/>
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
          key={this.state.current}
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
