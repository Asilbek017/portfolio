import React, { useEffect, useState } from 'react'
import "./upcoming.css"
import { Card } from '../../Components/Card/Card'

export const Upcoming = () => {
  
  const [home, setTopRated] = useState({})

  async function getMovie() {
    try {
      const res = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=4f2faeab890aafa2eac5bf3b2939c5b8")

      const data = await res.json()

      console.log(data);
      setTopRated(data)
    } catch (error) {
      console.error();
    }
  }

  useEffect(() => {
      getMovie()
  }, [])
  return (
    <section>
    <div className='home-wrapper'>
    {
        home?.results?.map(mov => {
        return (
        <Card vote_average={mov.vote_average} poster_path={mov.poster_path} id_mov={mov.id} />
      )
        })
      }
  </div>
  </section>
  )
}
