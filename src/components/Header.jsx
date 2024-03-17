import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../Assets/logo.png";
export const Header = () => {
  return (
    <>
    <nav className="bg-black shadow-md p-4 top-0 z-0 flex justify-between items-center h-[60px] cursor-pointer text-[20px] ">
      <div className="flex ml-[120px]">
      <Link
          exact
          to="/"
          className="mr-4 text-white hover:underline hover:underline-offset-8"
          activeClassName="text-red-500"
        >
          <img src={logo} alt="logo"
          className="w-full h-12 object-contain" />
        </Link>
        <div className="">

        </div>

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
      
    </nav>
    </>
  );
};
