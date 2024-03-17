import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import AddFavourite from "../components/AddFavourite";
import { Header } from '../components/Header';

const Movies = () => {
  const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=b7234b3d0b8e2719c5518a5e91c26528&language=en-US';
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`${API_URL}&page=${page}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(prevMovies => [...prevMovies, ...data.results]);
      })
      .catch(err => console.log("Error fetching movies", err));
  }, [page]);

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

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <Header />
      <h1 className='text-white text-center font-bold'>Movies</h1>
      <div className='flex gap-4 mt-11 flex-wrap justify-start space-x-6 ml-[70px]'>
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard
              key={movie.id}
              movie={movie}
              favouriteComponent={AddFavourite}
              handleClick={() => addToFavourites(movie)}
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          onClick={handleLoadMore}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Movies;
