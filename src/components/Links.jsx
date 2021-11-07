import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    url: '/search',
    text: 'Search'
  },
  {
    url: '/news',
    text: 'News'
  },
  {
    url: '/images',
    text: 'Images'
  },
  {
    url: '/videos',
    text: 'Videos'
  }
]

export const Links = () => {
  return(
    <div className="flex flex-wrap justify-evenly items-center mt-5 w-screen">
      { 
        links.map(({ url, text }, index) => (
          <NavLink key={index} to={url} activeClassName="text-blue-700 border-b-2 dark:text-blue-300 
          border-blue-700 pb-2">
            { text }
          </NavLink>
        ))
      }
    </div>
  );
};
