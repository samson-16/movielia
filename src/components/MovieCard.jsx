import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="flex flex-row">
      <div className="card bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg w-64 h-96">
        <div className="w-full h-64">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <p className="text-yellow-400 text-xl">⭐️ {movie.vote_average}</p>
          <p className="text-xl font-bold">{movie.title}</p>
          <p className="mt-2">{movie.release_date}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
