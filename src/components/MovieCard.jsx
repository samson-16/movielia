import React from 'react';
import { NavLink } from 'react-router-dom';

function MovieCard({ movie, favouriteComponent, handleClick }) {
  const FavouriteComponent = favouriteComponent;
  return (
    <NavLink to={`/${movie.id}`}>
      <div className="bg-gray-800 border border-border p-1 hover:scale-95 transitions relative rounded-lg overflow-hidden shadow-lg w-64 h-70">
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
            className="w-full h-full objcet-full"
          />
          <div className='absolute bottom-100 right-10 w-10 h-10 rounded-full flex items-center justify-center text-white group-hover:opacity-100 lg-gap-8 md:gap-5 gap-4 transition-opacity duration-500'>
          </div>
          
          <div className="absolute flex-btn bottom-0 left-0 gap-2 px-4 py-3 bg-opacity-60 bg-slate-950 text-white rounded-b-lg w-full">
          
          <p className="text-xl font-normal truncuate ">{movie.title}</p>
          <span className="text-sm">{movie.release_date.substring(0, 4)} </span>
          <span className="text-yellow-400 text-xl font-semibold">⭐️ {movie.vote_average.toFixed(1)} </span>
            <button
            onClick={() => handleClick(movie)}
            className="bg-white h-9 w-13 flex-col transitions hover:bg-transparent border-2  bg-submain text-white
             hover:text-red-600 transitions px-4 py-3 rounded text-sm bg-opacity-30 items-center"
          >
            <FavouriteComponent />
          </button>
          
         
        </div>
        </div>
        
      </div>
    </NavLink>
  );
}

export default MovieCard;