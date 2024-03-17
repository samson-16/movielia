import React, {  useEffect,useState } from 'react';
import AddFavourite from '../components/AddFavourite';
import MovieCard from '../components/MovieCard';
import { Header } from '../components/Header';

const Series = () => {
    const [series, setSeries]= useState([]);
 const series_Url = 
 'https://api.themoviedb.org/3/tv/popular?api_key=b7234b3d0b8e2719c5518a5e91c26528&language=en-US&page=1'
    useEffect(()=>{
        fetch(series_Url)
        .then(res=>res.json())
        .then(data=>{
            console.log(
                '******',data.results)
            setSeries(data.results)
        })
        .catch(error=>console.log("Error fetching series", error))
    }, [])

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
        <h1>Series</h1>
        <div className='flex gap-4 mt-16 flex-wrap justify-start space-x-6 ml-[70px]'>
          {series.map((movie)=>(
            <div>
              <MovieCard  key={movie.id}
                 movie={movie}
                 favouriteComponent={AddFavourite}
                 handleClick={() => addToFavourites(movie)}
               />
              </div>
          ))}
        </div>
  
      </div>
    );
};

export default Series;