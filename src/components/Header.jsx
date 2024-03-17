import React from "react";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center h-[60px] cursor-pointer text-[20px] fixed z-10 w-full bg-transparent ">
      <div className="flex ml-9">
        <NavLink
          exact
          to="/"
          className="mr-4 text-white hover:underline hover:underline-offset-8"
          activeClassName="text-red-500"
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/movies"
          className="mr-4 text-white hover:underline hover:underline-offset-8"
          activeClassName="text-red-500"
        >
          Movies
        </NavLink>
        <NavLink
          exact
          to="/series"
          className="mr-4 text-white hover:underline hover:underline-offset-8"
          activeClassName="text-red-500"
        >
          Series
        </NavLink>
        <NavLink
          exact
          to="/favourites"
          className="mr-4 text-white hover:underline hover:underline-offset-8"
          activeClassName="text-red-500"
        >
          Favourites
        </NavLink>
      </div>
      <div className="flex mr-9">
        <NavLink
          exact
          to="/signup"
          className="mr-4 text-white hover:underline hover:underline-offset-8"
          activeClassName="text-red-500"
        >
          Sign Up
        </NavLink>
        <NavLink
          exact
          to="/login"
          className="mr-4 text-white hover:underline hover:underline-offset-8"
          activeClassName="text-red-500"
        >
          Log In
        </NavLink>
      </div>
    </nav>
  );
};
