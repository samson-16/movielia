import React from "react";

function MovieCard({ movie }) {
  return (
    <div>
      <div className="card bg-gray-800 text-white rounded-lg overflow-clip shadow-lg w-56 h-[340px]  hover:scale-110 ">
        <div className="w-full h-44">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
            className="w-full h-full object-fill"
          />
        </div>
        <div className="p-4">
          <p className="text-yellow-400 text-xl">
            ⭐️ {movie.vote_average.toFixed(1)}
          </p>
          <p className="text-xl font-bold">{movie.title}</p>
          <p className="mt-2">{movie.release_date.substring(0, 4)}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
