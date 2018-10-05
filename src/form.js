import React from 'react'

const style = {
  card: {
    width: '32rem'
  }
}

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = this.props.card.cardId ? this.props.card : {question: '', answer: ''}
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    const newCardData = new FormData(event.target)
    this.setState({
      question: newCardData.get('question'),
      answer: newCardData.get('answer')
    })
    this.props.submit(this.state)
    event.target.reset()
  }
  handleChange({target}) {
    this.setState({[target.name]: target.value})
  }
  render() {
    return (
      <div className="card mx-auto mt-5 text-center" style={style.card}>
        <div className="card-header text-left">
          {this.props.card.cardId ? 'Edit a Card' : 'Create a Card'}
        </div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group text-left">
              <label htmlFor="inputQuestion" className="mr-2">Question:</label>
              <input
                onChange={this.handleChange}
                name="question"
                type="text"
                id="inputQuestion"
                className="form-control"
                placeholder="Enter card question here"
                value={this.state.question}/>
            </div>
            <div className="form-group text-left">
              <label htmlFor="inputAnswer" className="mr-3">Answer:</label>
              <input
                onChange={this.handleChange}
                type="text"
                id="inputAnswer"
                name="answer"
                className="form-control"
                placeholder="Enter card answer here"
                value={this.state.answer}/>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    )
  }
}
