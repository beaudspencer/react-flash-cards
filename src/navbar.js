import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-primary">
      <span className="navbar-brand text-warning">{"Flash 'em"}</span>
      <ul className="navbar-nav">
        <li className="navbar-item">
          <a href="#list" className="navbar-link text-light">Cards</a>
        </li>
        <li className="navbar-item ml-3">
          <a href="#new"className="navbar-link text-light">New</a>
        </li>
        <li className="navbar-item ml-3">
          <a href="#practice"className="navbar-link text-light">Practice</a>
        </li>
      </ul>
    </nav>
  )
}
