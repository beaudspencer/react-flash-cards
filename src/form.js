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
  }
  handleSubmit(event) {
    event.preventDefault()
    const newCardData = new FormData(event.target)
    const newCard = {
      cardID: this.props.nextId,
      question: newCardData.get('question'),
      answer: newCardData.get('answer')
    }
    this.props.submit(newCard)
    event.target.reset()
  }
  render() {
    return (
      <div className="card mx-auto mt-5 text-center" style={style.card}>
        <div className="card-header text-left">{this.props.mode === 'edit' && 'Edit a Card'}{this.props.mode === 'new' && 'Make a Card'}</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group text-left">
              <label htmlFor="inputQuestion" className="mr-2">Question:</label>
              <input name="question" type="text" id="inputQuestion" className="form-control" placeholder="Enter card question here"/>
            </div>
            <div className="form-group text-left">
              <label htmlFor="inputAnswer" className="mr-3">Answer:</label>
              <input type="text" id="inputAnswer" name="answer" className="form-control" placeholder="Enter card answer here"/>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    )
  }
}
