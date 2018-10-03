import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="navbar-item">
          <a href="#list" className="navbar-link">Cards</a>
        </li>
        <li className="navbar-item ml-3">
          <a href="#new"className="navbar-link">New</a>
        </li>
      </ul>
    </nav>
  )
}
