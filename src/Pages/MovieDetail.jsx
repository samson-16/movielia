import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import MovieCard from '../components/MovieCard';
import { Header } from "../components/Header";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  // console.log(id)
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=97f7490422c2cfab9e2f1045e6f6b524`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
      });
  }, [id]);
  const { title, overview, release_date, vote_average, poster_path } = movie;
  return (
    <div>
      <Header />
     
      {loading ? (
        <div>Loading...</div>
        ) : (

          <div className="w-full xl:h-50  relative text-white">
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt="" 
              className="w-full hidden opacity-40 xl:inline-block h-fulll object-cover max-h-screen"
              />
            <div className="xl:bg-black bg-black flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0">
                <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8">
                    <div className="xl:col-span-1 xl:order-none order-last h-header bg-black border-gray-800 rounded-lg overflow-hidden">
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt="" 
                        className="w-full h-full object-cover"/>
                    </div>
                    <div className="col-span-2 md:grid grid:cols-5 gap-4 items-center">
                        <div className="col-span-3 flex flex-col gap-10">
                            
                            <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">{title}</h1>
                            <p>Release Date: {release_date} Rating: {vote_average}</p>
                            <p className="text-slate-200 text-sm leading-7">{overview}</p>
                    

                
                     </div>
                    </div>
                </div>
            </div>
        
          </div>
        )}

 </div>
     
  
  );
};

export default MovieDetail;