import React from 'react'

export default class FilterDrop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {toggle: false}
    this.toggler = this.toggler.bind(this)
  }
  toggler() {
    this.setState({toggle: !this.state.toggle})
  }
  render() {
    const topics = []
    const drop = this.state.toggle ? 'd-block' : 'd-none'
    return (
      <div className="dropdown">
        <button onClick={this.toggler} className="btn btn-primary mt-3 ml-1">Filter By:</button>
        <div>
          {this.props.cards
            .filter((card) => {
              if (!topics.includes(card.topic)) {
                topics.push(card.topic)
                return card
              }
            })
            .map((card) => {
              return <button key={card.cardId} onClick={this.props.sort} className={drop + ' btn btn-secondary m-1'}>{card.topic}</button>
            })}
          <button onClick={this.props.sort} className={drop + ' btn btn-secondary m-1'}>none</button>
        </div>
      </div>
    )
  }
}
