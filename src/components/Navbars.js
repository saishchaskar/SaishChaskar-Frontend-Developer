import React from 'react';

function Navbars() {
  return (
    <nav className="bg-Transparent p-3">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-white text-lg font-bold  hover:underline " href="https://www.spacex.com/launches/">
          SpaceX-Imagine
        </a>
        <button
          className="text-white inline-block lg:hidden focus:outline-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

        </button>
        <a className="text-white text-lg font-bold lg:ml-1 hover:underline  " href="https://www.spacex.com/vehicles/dragon/">
          Capsules
        </a>
        <button
          className="text-white inline-block lg:hidden focus:outline-none "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

        </button>
        <a className="text-white text-lg font-bold lg:ml-1 hover:underline  " href="https://www.spacex.com/">
          About
        </a>
        <button
          className="text-white inline-block lg:hidden focus:outline-none "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

        </button>

      </div>
    </nav>
  );
}

export default Navbars;
