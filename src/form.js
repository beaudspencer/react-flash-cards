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
      question: newCardData.get('question'),
      answer: newCardData.get('answer')
    }
    event.target.reset()
    if (this.props.mode === 'edit') {
      newCard.cardId = parseInt(this.props.params.cardId, 10)
    }
    else {
      newCard.cardId = this.props.nextId
    }
    this.props.submit(newCard)
    event.target.reset()
  }

  render() {
    const currentCard = Object.assign({}, this.props.cards.find(card => card.cardId.toString() === this.props.params.cardId))
    return (
      <div className="card mx-auto mt-5 text-center" style={style.card}>
        <div className="card-header text-left">{this.props.mode === 'edit' && 'Edit a Card'}{this.props.mode === 'new' && 'Make a Card'}</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group text-left">
              <label htmlFor="inputQuestion" className="mr-2">Question:</label>
              {this.props.mode === 'new' && <input name="question" type="text" id="inputQuestion" className="form-control" placeholder="Enter card question here"/>}
              {this.props.mode === 'edit' && <input name="question" type="text" id="inputQuestion" className="form-control" defaultValue={currentCard.question}/>}
            </div>
            <div className="form-group text-left">
              <label htmlFor="inputAnswer" className="mr-3">Answer:</label>
              {this.props.mode === 'new' && <input type="text" id="inputAnswer" name="answer" className="form-control" placeholder="Enter card answer here"/>}
              {this.props.mode === 'edit' && <input type="text" id="inputAnswer" name="answer" className="form-control" defaultValue={currentCard.answer}/>}
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    )
  }
}
