import React, { useEffect, useState } from 'react'
import "./home.css"
import { Card } from '../../Components/Card/Card'

export const Home = () => {

  const [home, setHome] = useState({})
  const [search, setSearch] = useState('');

  async function getMovie() {
    try {
      const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4f2faeab890aafa2eac5bf3b2939c5b8")

      const data = await res.json()

      console.log(data);
      setHome(data)
    } catch (error) {
      console.log(error);
    }
  }

  async function getSearch () {
    try {
      const res = await fetch(search ? `https://api.themoviedb.org/3/search/movie?api_key=4f2faeab890aafa2eac5bf3b2939c5b8&query=${search}` : "https://api.themoviedb.org/3/movie/popular?api_key=4f2faeab890aafa2eac5bf3b2939c5b8")

      const data = await res.json()

      console.log(data);
      setHome(data)
      
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getSearch()
  }, [search])

  useEffect(() => {
    getMovie()
  }, [])
  

  return (
    <section>
      <input className='input' type="text" placeholder='Search Your Movie...' onInput={(evt) => setSearch(evt.target.value)} />
      <div className="home-wrapper">
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
