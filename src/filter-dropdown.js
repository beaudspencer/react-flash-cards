import React from 'react'

export default class FilterDrop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {toggle: false}
    this.toggler = this.toggler.bind(this)
  }
  toggler() {
    return this.state.toggle ? 'd-none' : 'd-block'
  }
  render() {
    return (
      <div className="dropdown">
        <button>Filter By:</button>
        <div className="dropdown-menu"></div>
      </div>
    )
  }
}
