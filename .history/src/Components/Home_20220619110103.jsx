import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 justify-center h-full flex flex-col">
        <p className="text-pink-600 text-lg">Hi, my name is</p>
        <h1 className="text-[#ccd6f6] text-4xl font-bold sm:text-7xl">
          Brighton Mboya
        </h1>
        <h1 className="text-xl font-bold mt-3 text-[#8892b0] md:text-3xl">
          I help businesses and Companies have better presence and experience on
          the Web
        </h1>
        <p className="text-[#8892b0] py-4 max-w-[700px] text-lg md:text-2xl">
          My work ranges from Design, Front-end Development, and Social Media
          Management
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
