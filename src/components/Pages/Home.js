import React from "react";
import "./../././././../index.css";
import { Link } from "react-scroll";

// Home Section
const Home = () => {
  return (
    <section id="home" className="py-20 bg-black home-bg">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-100 font-bold text-center md:text-left lg:ml-10 ">
          Welcome to Homeland Guest House
        </h1>
        <p className="text-lg sm:text-xl lg:text-xl text-gray-100 text-center md:text-left md:ml-10 lg:ml-10">
          Enjoy nature views and cozy accommodations.
          <br />
          Relax in our beautifully designed rooms.
          <br />
          Experience top-notch service and comfort.
          <br />
          Unwind by the fire pit as the sun sets over the horizon.
          <br />
          Indulge in our gourmet dining, made with locally sourced ingredients.
          <br />
          Create unforgettable memories with activities tailored just for you.
        </p>
        <div className="mt-10 text-center md:text-left">
          <Link to="rooms" smooth={true}>
            <button className="bg-blue-400 border-2 rounded-full px-6 py-2 text-gray-100 hover:bg-transparent lg:ml-10 transition-all duration-300">
              Explore Rooms
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Home;
