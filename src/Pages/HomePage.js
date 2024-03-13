import React, {useEffect, useState} from 'react'
import { Header } from '../components/Header'
import MovieCard from '../components/MovieCard';

export const HomePage = () => {
    // const Api= 'b7234b3d0b8e2719c5518a5e91c26528';
    const API_URL ='https://api.themoviedb.org/3/movie/popular?api_key=b7234b3d0b8e2719c5518a5e91c26528&language=en-US';
    const Top_Rated_Api= 'https://api.themoviedb.org/3/movie/top_rated?api_key=b7234b3d0b8e2719c5518a5e91c26528&language=en-US';

  const [movies, setMovies] = useState([]);
  const [Top, setTop]= useState([])
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      })
      .catch(error => {
        console.error("Error fetching popular movies:", error);
      });

      fetch(Top_Rated_Api)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setTop(data.results);
      })
      .catch(error => {
        console.error("Error fetching Top rated movies:", error);
      });
  }, 
  
  
  []);

  console.log(movies);
  return (
    <div> 
        <Header />
        <div>
       <h1 className='text-4xl font-normal text-center text-white mb-3'>Top Rated movies</h1>
       </div>
      <div className="flex gap-4 flex-wrap">
       
        {Top.map((movieReq) => (
          <MovieCard movie={movieReq} />
        ))}
      </div>
       <div className='text-4xl font-normal text-center text-white mb-3'>
       <h1>popular movies</h1>
       </div>
      <div className="flex gap-4 mb-[50px] flex-wrap justify-start">
       
        {movies.map((movieReq) => (
          <MovieCard movie={movieReq} />
        ))}
      </div>
       
     
    </div>
    
    
  )
}
