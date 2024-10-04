import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <Link className='header-link-1' to="/">MOVIES</Link>
          
          <div className="header-box">
          <Link className='header-link' to="/">Home</Link>
          <Link className='header-link' to="/toprated">Top Rated</Link>
          <Link className='header-link' to="/upcoming">Upcoming</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
