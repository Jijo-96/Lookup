import React from "react";
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { Search } from "./Search";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div
      className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center
                    border-b dark:border-gray-700 border-gray-200"
    >
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p
            className="text-2xl bg-green-400 text-white py-1 px-2 rounded-sm
          dark:bg-dark-gray-500 dark:text-gray-900
          font-bold flex items-center justify-center"
          >
            Lookup <FcSearch className="text-5xl p-2" />
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="flex flex-col text-xl dark:bg-dark-50 dark:text-gray-900 bg-white border : ;
        rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? (
            <>
              <div className="flex justify-evenly items-center p-1">
                <p className="mx-2">Light</p>
                <BsFillSunFill className="text-yellow-300 text-2xl"/>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-evenly items-center p-1">
                <p className="mx-2">Dark</p>
                <BsFillMoonFill />
              </div>
            </>
          )}
        </button>
      </div>
      <Search />
    </div>
  );
};
