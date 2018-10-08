import React from 'react'
import NoCards from './no-cards.js'
import Cards from './cards'
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
      this.setState({show: event.target.value})
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
        {this.props.cards.length === 0 && <NoCards/>}
        {this.props.cards.length > 0 &&
          <React.Fragment>
            <FilterDrop topics={topics} sort={this.sort}/>
            <Cards cards={renderCards} remove={this.props.remove}/>
          </React.Fragment>
        }
      </React.Fragment>
    )
  }
}
