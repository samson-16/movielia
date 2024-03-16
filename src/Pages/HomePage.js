import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import AddFavourite from "../components/AddFavourite";
import { Header } from "../components/Header";

export const HomePage = () => {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=b7234b3d0b8e2719c5518a5e91c26528&language=en-US";
  const Top_Rated_Api =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=b7234b3d0b8e2719c5518a5e91c26528&language=en-US";

  const [movies, setMovies] = useState([]);
  const [Top, setTop] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching popular movies:", error);
      });

    fetch(Top_Rated_Api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTop(data.results);
      })
      .catch((error) => {
        console.error("Error fetching top rated movies:", error);
      });
  }, []);

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
      <div>
        <h1 className="text-4xl font-normal text-center text-white mb-3">
          Top Rated Movies
        </h1>
      </div>
      <div className="flex gap-8 flex-wrap justify-center">
        {Top.map((movieReq) => (
          <MovieCard
            key={movieReq.id}
            movie={movieReq}
            favouriteComponent={AddFavourite}
            handleClick={() => addToFavourites(movieReq)}
          />
        ))}
      </div>
      <div className="text-4xl font-normal text-center text-white mb-3">
        <h1>Popular Movies</h1>
      </div>
      <div className="flex gap-8 mb-[50px] flex-wrap justify-start">
        {movies.map((movieReq) => (
          <MovieCard
            key={movieReq.id}
            movie={movieReq}
            favouriteComponent={AddFavourite}
            handleClick={() => addToFavourites(movieReq)}
          />
        ))}
      </div>
    </div>
  );
};
