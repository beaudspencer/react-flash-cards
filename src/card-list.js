import React from 'react'
import Card from './card.js'
import FilterDrop from './filter-dropdown.js'

export default class CardList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {show: 'none'}
    this.sort = this.sort.bind(this)
  }
  sort(event) {
    if (!event) {
      this.setState({show: 'none'})
    }
    else {
      this.setState({show: event.target.innerHTML})
    }
  }
  render() {
    const topics = []
    this.props.cards
      .filter((card) => {
        if (!topics.includes(card.topic)) {
          topics.push(card)
        }
      })
    const renderCards = this.props.cards
      .filter((card) => {
        if (this.state.show !== 'none') {
          return card.topic === this.state.show
        }
        return card
      })
    return (
      <React.Fragment>
        {this.props.cards.length === 0 && <div className="text-center mt-5">
          <h2>You have no cards saved</h2>
          <a className="btn btn-primary mt-3" role="button" href="#new">
          Make a Card
          </a>
        </div>}
        {this.props.cards.length > 0 &&
        <React.Fragment>
          <FilterDrop topics={topics} sort={this.sort}/>
          <div className="container-fluid">
            <div className="row justify-content-start">
              {renderCards.map((card) => {
                return <Card
                  id={card.cardId}
                  key={card.cardId}
                  remove={this.props.remove}
                  card={card}/>
              })}
            </div>
          </div>
        </React.Fragment>
        }
      </React.Fragment>
    )
  }
}
