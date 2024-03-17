import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import AddFavourite from "../components/AddFavourite";
import { Header } from "../components/Header";
import { Search } from "../components/search/Search";
import back from "../Assets/701704.jpg";
import Footer from "../components/Footer";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from "react-slideshow-image";


export const HomePage = () => {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=b7234b3d0b8e2719c5518a5e91c26528&language=en-US";

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [showAllMovies, setShowAllMovies] = useState(false);
  const [searchQuery, setSearchQuery] = useState([]);

  const [series, setSeries] = useState([]);
  const [pageSeries, setPageSeries] = useState(1);
  const [showAllSeries, setShowAllSeries] = useState(false);

  const series_Url =
    "https://api.themoviedb.org/3/tv/popular?api_key=b7234b3d0b8e2719c5518a5e91c26528&language=en-US";

  useEffect(() => {
    fetch(series_Url + `&page=${pageSeries}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("******", data.results);
        setSeries((prevSeries) => [...prevSeries, ...data.results]);
      })
      .catch((error) => console.log("Error fetching series", error));
  }, [pageSeries]);

  useEffect(() => {
    fetch(`${API_URL}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
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
    if (!showAllMovies) {
      setPage(page + 1);
    }
    setShowAllMovies(!showAllMovies);
  };

  const handleLoadMoreSeries = () => {
    if (!showAllSeries) {
      setPageSeries(pageSeries + 1);
    }
    setShowAllSeries(!showAllSeries);
  };



  return (
    <div>
      <Header />
      <div className="relatve">
        <img
          src={back}
          alt=""
          className="-z-30 absolute w-full h-[800px] object-fill   "
        />
      </div>


      <div className="top-0 left-0 w-full z-10">
        <Search setSearchQuery={setSearchQuery} />
      </div>
      {searchQuery.length > 0 ? (
        <div className="ml-5 mt-2 ">
          <div className="text-4xl font-normal text-center text-white mt-[100px] mb-2 h-7 ">
            <h1>Search result</h1>
          </div>
          <div className="flex gap-4 mb-[50px] flex-wrap justify-start">
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
          <div className="ml-5 mt-[410px] ">
            <div className="text-4xl w-full text-white sm:gap-8 border-gray-400 items-center">
              <h1 className="sm:text-xl font-bold text-4xl text-center text-white mb-3 border-gray-400 border-2">
                Popular Movies
              </h1>
            </div>
            <div className="flex gap-4 flex-wrap justify-start space-x-6 ml-[70px]">
              {movies
                .slice(0, showAllMovies ? movies.length : 6)
                .map((movieReq) => (
                  <MovieCard
                    key={movieReq.id}
                    movie={movieReq}
                    favouriteComponent={AddFavourite}
                    handleClick={() => addToFavourites(movieReq)}
                  />
                ))}
            </div>
            {movies.length > 6 && (
              <div className="text-center mt-4">
                <button
                  onClick={handleLoadMore}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-[1400px]"
                  style={{ marginRight: "30px" }}
                >
                  {showAllMovies ? "Shrink" : "Load More"}
                </button>
              </div>
            )}
          </div>

          <div className="ml-5 mt-[100px] ">
            <div className="text-4xl w-full text-white sm:gap-8 border-gray-400 items-center">
              <h1 className="sm:text-xl font-bold text-4xl text-center text-white mb-3 border-gray-400 border-2">
                Popular TV Series
              </h1>
            </div>
            <div className="flex gap-4 flex-wrap justify-start space-x-6 ml-[70px]">
              {series
                .slice(0, showAllSeries ? series.length : 6)
                .map((seriesReq) => (
                  <MovieCard
                    key={seriesReq.id}
                    movie={seriesReq}
                    favouriteComponent={AddFavourite}
                    handleClick={() => addToFavourites(seriesReq)}
                  />
                ))}
            </div>
            {series.length > 6 && (
              <div className="text-center mt-4">
                <button
                  onClick={handleLoadMoreSeries}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-[1400px]"
                  style={{ marginRight: "30px" }}
                >
                  {showAllSeries ? "Shrink" : "Load More"}
                </button>
              </div>
            )}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};
