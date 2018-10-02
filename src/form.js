import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    const newCardData = new FormData(event.target)
    const newCard = {
      question: newCardData.get('question'),
      answer: newCardData.get('answer')
    }
    this.props.submit(newCard)
    event.target.reset()
  }
  render() {
    const style = {
      card: {
        width: '32rem'
      }
    }
    return (
      <div className="card mx-auto mt-5 text-center" style={style.card}>
        <div className="card-header text-left">Create a Flash Card</div>
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
