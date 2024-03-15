import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import MovieCard from "../components/MovieCard";
import { Search } from "../components/search/Search";
import Avatar from "../Assets/Avatar.png";

export const HomePage = () => {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=b7234b3d0b8e2719c5518a5e91c26528&language=en-US&page=2";
  const Top_Rated_Api =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=b7234b3d0b8e2719c5518a5e91c26528&language=en-US";

  const [movies, setMovies] = useState([]);
  const [Top, setTop] = useState([]);

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

    fetch(Top_Rated_Api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTop(data.results);
      })
      .catch((error) => {
        console.error("Error fetching Top rated movies:", error);
      });
  }, []);

  //  console.log(searchQuery)

  return (
    <div className=" relative">
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
              <MovieCard movie={movieReq} />
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="ml-5 mt-28 ">
            <div>
              <h1 className="text-4xl font-normal text-center text-white mb-3  border-gray-400 border-2">
                Top Rated movies
              </h1>
            </div>
            <div className="flex gap-4 flex-wrap justify-center ">
              {Top.map((movieReq) => (
                <MovieCard movie={movieReq} />
              ))}
            </div>
          </div>
          <div className="ml-5 mt-2">
            <div className="text-4xl font-normal w-full text-white mb-6 border-gray-400 border-2 h-[55px] mt-4 flex justify-center items-center">
              <h1>popular movies</h1>
            </div>
            <div className="flex gap-4 mb-[50px]  flex-wrap justify-start">
              {movies.map((movieReq) => (
                <MovieCard movie={movieReq} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
