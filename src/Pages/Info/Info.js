import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./info.css"

export const Info = () => {
  let { id } = useParams();
    
  const [home, setHome] = useState({})

  async function getMovie() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4f2faeab890aafa2eac5bf3b2939c5b8`);

      const data = await res.json()

      console.log(data);
      setHome(data)
    } catch (error) {
      console.error();
    }
  }

  useEffect(() => {
      getMovie()
  }, [])
  return (
    <div className='info-wrapper'>
        {
            <div>
                <div className="shadow-box"></div>
                <img className='info-img' src={"https://image.tmdb.org/t/p/original" + 
                    home?.backdrop_path} alt="" width={'100%'} height={600}/>
                <p className='info-genres'>{
                    home?.genres?.map(item => item.name)
                    }</p>
                <p className='info-popularity'>{home?.popularity}-views</p>
                <p className='info-status'>{home?.release_date}</p>
                <h1 className='info-title'>{home?.original_title}</h1>
                <p className='info-overview'>{home?.overview}</p>
                <a className='info-link' href={home?.homepage} target='blank'>Home Page</a>
            </div>
        }
    </div>
  )
}
