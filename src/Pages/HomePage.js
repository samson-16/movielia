import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import AddFavourite from "../components/AddFavourite";
import { Header } from "../components/Header";
import { Search } from "../components/search/Search";
import Avatar from "../Assets/Avatar.png";
import Footer from "../components/Footer";

export const HomePage = () => {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=b7234b3d0b8e2719c5518a5e91c26528&language=en-US";
  // const Top_Rated_Api =
  //   "https://api.themoviedb.org/3/movie/top_rated?api_key=b7234b3d0b8e2719c5518a5e91c26528&language=en-US";

    const [series, setSeries]= useState([]);
    const series_Url = 
    'https://api.themoviedb.org/3/tv/popular?api_key=b7234b3d0b8e2719c5518a5e91c26528&language=en-US&page=1'

  const [movies, setMovies] = useState([]);
 
  const [searchQuery, setSearchQuery] = useState([]);
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

    fetch(series_Url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSeries(data.results);
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

      <div className="relatve">
        <img
          src={Avatar}
          alt=""
          className="-z-30 absolute w-full h-[500px] object-fill "
        />
      </div>
        

<div className=" top-0 left-0 w-full z-10">
        <Search setSearchQuery={setSearchQuery} />
      </div>
      {searchQuery.length > 0 ? (
        <div className="ml-5 mt-2 ">
          <div className="text-4xl font-normal text-center text-white mt-[100px] mb-2 h-7 ">
            <h1>Search result</h1>
          </div>
          <div className="flex gap-4 mb-[50px]  flex-wrap justify-start">
            {searchQuery.map((movieReq) => (
               <MovieCard
               key={movieReq.id}
               movie={movieReq}
               favouriteComponent={AddFavourite}
               handleClick={() => addToFavourites(movieReq)}
             />
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="ml-5 mt-28 ">
            <div className="text-4xl w-full text-white sm:gap-8 border-gray-400 items-center">
              <h1 className="sm:text-xl font-bold text-4xl text-center text-white mb-3  border-gray-400 border-2">Popular Movies</h1>
            </div>
            <div className="flex gap-4   flex-wrap justify-start">
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
          <div className="ml-5 mt-28 ">
            <div className="text-4xl w-full text-white sm:gap-8 border-gray-400 items-center">
              <h1 className="sm:text-xl font-bold text-4xl text-center text-white mb-3  border-gray-400 border-2">Popular Movies</h1>
            </div>
            <div className="flex gap-4   flex-wrap justify-start">
              {series.map((movieReq) => (
                  <MovieCard
                  key={movieReq.id}
                  movie={movieReq}
                  favouriteComponent={AddFavourite}
                  handleClick={() => addToFavourites(movieReq)}
                />
              ))}
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
    
  );
};
