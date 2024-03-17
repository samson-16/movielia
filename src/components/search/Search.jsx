import React, { useEffect, useMemo, useState } from "react";
import { FaSearchengin } from "react-icons/fa";

export const Search = ({ setSearchQuery }) => {
  const [search, setSearch] = useState("");
  const Api_search = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=b7234b3d0b8e2719c5518a5e91c26528`;
  const handleSearch = async () => {
    try {
      const res = await fetch(Api_search);
      const data = await res.json();

      setSearchQuery(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useMemo(() => {
    handleSearch();
  }, [search]);
   const handleSubmit=(e)=>{
    e.preventDefault();
   }
  return (
    <div className="h-[400px] flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="caret-slate-600 w-[700px] h-[50px] mr-2 rounded-lg px-2 border-none focus:outline-none focus:ring"
        />
        <button
          type="submit"
          style={{
            color: "royalblue",
            width: "52px",
            height: "52px",
            backgroundColor: "red",
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
  );
};
