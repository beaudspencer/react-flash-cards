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
    this.setState({show: event.target.value})
  }
  render() {
    const topics = this.props.cards
      .reduce((acc, card) => {
        if (!acc.includes(card.topic)) {
          acc.push(card.topic)
          return acc
        }
      }, [])
    console.log(topics)
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
