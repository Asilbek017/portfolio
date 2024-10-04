import React from 'react'
import "./card.css"
import { Link } from 'react-router-dom'

export const Card = ({vote_average , poster_path , id_mov}) => {
  return (
    <div className='card-wrapper'>
      <div className="card">
        <img src={"https://image.tmdb.org/t/p/w500" + poster_path} alt="" width={300} height={400} />
        <p className='card-text'>{vote_average}</p>
      </div>
      <div className="card-info">
        <Link className='card-btn' to={`home/${id_mov}`}>More</Link>
      </div>
    </div>
  )
}
