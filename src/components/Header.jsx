import React from "react";

export const Header = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center h-[60px] cursor-pointer text-[20px] ">
      <div>
        <ul className="flex ml-9">
          <li className="mr-4 text-white hover:underline hover:underline-offset-8">Home</li>
          <li className="mr-4 text-white hover:underline hover:underline-offset-8">Movies</li>
          <li className="mr-4 text-white hover:underline hover:underline-offset-8">Series</li>
          <li className="mr-4 text-white hover:underline hover:underline-offset-8">Favorites</li>
        </ul>
      </div>
      <div>
        <ul className="flex mr-9">
          <li className="mr-4 text-white hover:underline hover:underline-offset-8">Sign up</li>
          <li className="text-white hover:underline hover:underline-offset-8">Log in</li>
        </ul>
      </div>
    </nav>
  );
};
