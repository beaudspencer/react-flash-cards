import React from 'react'
import QuizCard from './quiz-card.js'
import ProgressBar from './progress-bar.js'
import DifficultyButtons from './difficulty-buttons.js'
import NoCards from './no-cards'

export default class Practice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
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
    this.updateDiffCall = this.updateDiffCall.bind(this)
  }
  updateDiffCall(event) {
    const selected = event.target.value
    const { current } = this.state
    const { cards } = this.props
    this.props.handleDifficulty(selected, this.state.current)
    if (cards.length === current + 1) {
      this.setState({
        current: 0
      })
      this.props.next()
      return
    }
    this.nextCard()
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
    return Math.floor(((this.state.current + 1) / this.props.cards.length) * 100)
  }
  render() {
    const percent = this.calcPercentDone()
    const { cards } = this.props
    return (
      cards.length >= 1
        ? <div className="text-center mt-5">
          <ProgressBar percent={percent}/>
          <div
            className="d-inline-block position-absolute" style={this.style.left}>
            <i
              onClick={this.prevCard}
              className={
                (this.state.current > 0) ? 'fas fa-angle-double-left' : 'd-none'}>
            </i>
          </div>
          <QuizCard card={cards[this.state.current]}
            toggle={this.toggleAnswer}
            shown={this.state.shown}
            key={this.state.current}
          />
          <DifficultyButtons
            card={cards[this.state.current]}
            handleDifficulty={this.updateDiffCall}
          />
          <div
            className="d-inline-block position-absolute" style={this.style.right}>
            <i
              onClick={this.nextCard}
              className={(this.state.current < cards.length - 1)
                ? 'fas fa-angle-double-right'
                : 'd-none'
              }
            ></i>
          </div>
        </div>
        : <div>
          <NoCards/>
        </div>
    )
  }
}
