import React from 'react'

export default class QuizCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {shown: false}
    this.toggleAnswer = this.toggleAnswer.bind(this)
  }
  toggleAnswer() {
    this.setState({show: !this.state.shown})
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{this.props.card.question}</h3>
          <div onClick={this.toggleAnswer}>
            <i
              className={
                this.state.shown ? 'fas fa-angle-down' : 'fas fa-angle-right'
              }>
            </i>
            <p className="card-text">Show Answer</p>
          </div>
          <p className={this.state.shown ? 'card-text' : 'd-none'}>
            {this.props.card.answer}
          </p>
        </div>
      </div>
    )
  }
}
