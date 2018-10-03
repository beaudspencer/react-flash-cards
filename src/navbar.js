import React from 'react'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="mt-3">
        <a href="#list" className="m-3 text-primary">Cards</a>
        <a href="#new"className="text-primary">New</a>
      </div>
    )
  }
}
