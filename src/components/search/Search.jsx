import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaSearchengin } from "react-icons/fa";

export const Search = ({setSearchQuery}) => {
  
  // const history = useHistory();
  // // const Api_search = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchQuery)}&api_key=b7234b3d0b8e2719c5518a5e91c26528`;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch(Api_search)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       if (data.results && data.results.length > 0) {
  //         setMovies(data.results);}    
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
      
  //     });
  // }
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="h-[400px] flex justify-center items-center">
      <form >
        <input
          type="text"
          placeholder="Search..."
     
          onChange={handleSearch}
          className="caret-slate-600 w-[700px] h-[50px] mr-2 rounded-lg px-2 border-none focus:outline-none focus:ring"
        />
        <button
          type="submit"
          style={{
            color: "royalblue",
            width: "52px",
            height: "52px",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "17px",
          }}
        >
          <FaSearchengin />
        </button>
      </form>

      
        {/* {error && <p>{error}</p>}
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <SearchResult key={index} movie={movie} />
          ))
        ) : (
          <p>No results found</p>
        )} */}
{/* 
<ul>
        {movies.map((movie) => (
          <SearchResult key={movie.id} {...movie} />
        ))}
      </ul>
      </div> */}
    </div>
  )
};
