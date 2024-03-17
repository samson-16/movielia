import React from 'react';

import { NavLink } from 'react-router-dom';

function MovieCard({ movie, favouriteComponent, handleClick }) {
  const FavouriteComponent = favouriteComponent;
  return (
     <NavLink to={`/${movie.id}`}>
    <div >
      <div className="image-container card bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg w-64 h-96 ">
        <div className="w-full h-64">
    
      <div className='p-4 hover:text-gray-900 active:text-teal-100'>
            <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
            className="w-full h-full object-fill"
            />
            <button
            onClick={() => handleClick(movie)}
            className="overlay d-flex align-items-center text-stone-300 justify-content-center"
          >
            <FavouriteComponent />
          </button>
            </div>

        </div>
        <div className="p-4">
          <p className="text-yellow-400 text-xl">⭐️ {movie.vote_average.toFixed(1)}</p>
          <p className="text-xl font-bold">{movie.title}</p>
          <p className="mt-2">{movie.release_date.substring(0, 4)}</p>
        </div>
      </div>
    
    </div>
    </NavLink>
  );
}

export default MovieCard;