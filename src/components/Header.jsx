import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center h-[60px] cursor-pointer text-[20px] ">
      <div className="flex ml-9">
        <Link
          to="/"
          className="mr-4 text-white hover:underline hover:underline-offset-8"
        >
          Home
        </Link>
        <Link className="mr-4 text-white hover:underline hover:underline-offset-8">
          Movies
        </Link>
        <Link className="mr-4 text-white hover:underline hover:underline-offset-8">
          Series
        </Link>
        <Link
          to="/favourites"
          className="mr-4 text-white hover:underline hover:underline-offset-8"
        >
          Favourites
        </Link>
      </div>
      <div className="flex mr-9">
        <Link className="mr-4 text-white hover:underline hover:underline-offset-8">
          Sign Up
        </Link>
        <Link className="mr-4 text-white hover:underline hover:underline-offset-8">
          Log In
        </Link>
      </div>
    </nav>
  );
};
