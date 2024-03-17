import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard';
import AddFavourite from "../components/AddFavourite";
import { Header } from '../components/Header';

const Movies = () => {
  const API_URL ='https://api.themoviedb.org/3/discover/movie?api_key=b7234b3d0b8e2719c5518a5e91c26528&language=en-US';
  const [movies, setMovies]= useState([])
  const [upcoming, setUpcomin]= useState([])
  const Upcoming_Url= 'https://api.themoviedb.org/3/movie/upcoming?api_key=b7234b3d0b8e2719c5518a5e91c26528&language=en-US&page=1'
  useEffect(()=>{
    fetch(API_URL)
      .then(res=> res.json())
      .then(data=>{
        console.log(data)
        setMovies(data.results)
      })
      .catch(err=>console.log("Error fetching moves", err))
      fetch(Upcoming_Url)
      .then(res=> res.json())
      .then(data=>{
        console.log(data)
        setMovies(data.results)
      })
      .catch(err=>console.log("Error fetching moves", err))
    },[]);

    const addToFavourites = (movie) => {
      try {
        const favouriteMovies =
          JSON.parse(localStorage.getItem("favourites")) || [];
        if (!favouriteMovies.some((favMovie) => favMovie.id === movie.id)) {
          favouriteMovies.push(movie);
          localStorage.setItem("favourites", JSON.stringify(favouriteMovies));
        }
      } catch (error) {
        console.error("Error adding to favourites: ", error);
      }
    };
  return (
    <div>
      <Header />
      <h1>Movies</h1>
      <div className='flex gap-4 mt-11 flex-wrap justify-start space-x-6 ml-[70px]'>
        {movies.map((movie)=>(
          <div key={movie.id}>
            <MovieCard  key={movie.id}
               movie={movie}
               favouriteComponent={AddFavourite}
               handleClick={() => addToFavourites(movie)}
             />
            </div>
        ))}
      </div>

    </div>
  )
}
export default Movies;