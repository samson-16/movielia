// import React from "react";

// export const SearchResult = ({ movie }) => {
//   if (!movie) {
//     return <p>No movie data available</p>;
//   }

//   return (
//     <div>
//       <h1 className="text-3xl font-bold">Search Result</h1>
//       <p className="mt-4 text-lg">This is the search result page.</p>

//       <div>
//         <img
//           src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//           alt={movie.title}
//         />
//         <div className="p-4">
//           <p className="text-yellow-400 text-xl">⭐️ {movie.vote_average.toFixed(1)}</p>
//           <p className="text-xl font-bold">{movie.title}</p>
//           <p className="mt-2">{movie.release_date && movie.release_date.substring(0, 4)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };
