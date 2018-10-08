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
    const drop = this.state.toggle ? 'd-block' : 'd-none'
    return (
      <div className="dropdown">
        <button onClick={this.toggler} className="btn btn-primary mt-3 ml-1">Filter By:</button>
        <div>
          {this.props.cards
            .filter((card, index, self) => self.indexOf(card) === index)
            .map((card) => {
              return <button key={card.topic} onClick={this.props.sort} className={drop + ' btn btn-secondary m-1'}>{card.topic}</button>
            })}
          <button onClick={this.props.sort} className={drop + ' btn btn-secondary m-1'}>none</button>
        </div>
      </div>
    )
  }
}