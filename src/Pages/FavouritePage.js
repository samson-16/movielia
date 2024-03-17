import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { Header } from "../components/Header";
import Footer from "../components/Footer";
function FavouritePage() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetchFavourites();
  }, []);

  const fetchFavourites = () => {
    const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
    if (storedFavourites) {
      const validFavourites = storedFavourites.filter(
        (movie) => movie && movie.poster_path
      );
      setFavourites(validFavourites);
    }
  };

  const removeFromFavourites = (movieToRemove) => {
    // Filter out the movie to remove
    const updatedFavourites = favourites.filter(
      (movie) => movie.id !== movieToRemove.id
    );
    // Update local storage
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    // Update state to re-render the component
    setFavourites(updatedFavourites);
  };

  return (
    <>
    <Header />
    <div className="flex gap-8 flex-wrap justify-center mt-4 mb-20">
      {favourites.length > 0 ? (
        favourites.map((movie) => (
          <NavLink to={`/${movie.id}`}>
          <div className="flex gap-8 flex-wrap ">
            <div className="image-container card bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg w-64 h-96 ">
              <div className="">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                  className="w-full h-full object-fill"
                />
                <button
                  className="overlay"
                  onClick={() => removeFromFavourites(movie)}
                >
                  Remove from Favourite
                </button>
              </div>
              <div className="p-4">
                <p className="text-yellow-400 text-xl">
                  ⭐️ {movie.vote_average}
                </p>
                <p className="text-xl font-bold">{movie.title}</p>
                <p className="mt-2">{movie.release_date}</p>
              </div>
            </div>
          </div>
          </NavLink>
        ))
      ) : (
        <p className="font-size-500px">
          <b>No favourite movies added.</b>
        </p>
      )}
    </div>
    <Footer />
    </>
  );
}

export default FavouritePage;
