import React from "react";

function MovieCard({ movie, favouriteComponent, handleClick }) {
  const FavouriteComponent = favouriteComponent;
  return (
    <div>
<<<<<<< HEAD
      <div className="image-container card bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg w-64 h-96 ">
        <div className=" w-full h-64">
=======
      <div className="card bg-gray-800 text-white rounded-lg overflow-clip shadow-lg w-56 h-[340px]  hover:scale-110 ">
        <div className="w-full h-44">
>>>>>>> 7ea93fad21958976883269384ddd4ff69f9d0845
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
            className="w-full h-full object-fill"
          />
          <button
            onClick={() => handleClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </button>
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
