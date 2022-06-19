import React from "react";
import shamba from "../assets/shamba.jpg";
import ecom from "../assets/ecommerce.jpg";
import skope from "../assets/skope.jpg";
import pet from "../assets/pet.jpg";
import reddit from "../assets/reddit.jpg";
import portfolio from "../assets/portfolio.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6 md:text-xl">// Check out some of my recent work</p>
        </div>

        {/* ECommerce Solution */}
        <div className="flex text-white flex-col">
          <img
            src={ecom}
            className="max-w-sm border-white border-2 rounded-lg"
          />
          <div>
            <h3 className="md:ml-[40px] mt-[30px] text-lg">
              An Ecommerce management dashboard that helps students who owns
              online business, to track their sales data, plan tasks, schedule
              meetings and see the differet orders that they have been
              receiving.
            </h3>
            <p className="mt-5">
              <em className="font-semi-bold">Technologies used:</em> NextJS,
              TailwindCSS, Styled Components, SyncFusion Components
            </p>
            <button className="px-3 py-1 rounded-md mt-5 text-lg font-semibold bg-pink-600">
              <a href="https://github.com/BrightonMboya/react-dashboard">
                GitHub Link
              </a>
            </button>
            <span className="ml-7">
              <button className="px-3 py-1 rounded-md mt-5 text-lg font-semibold bg-pink-600">
                <a href="https://ecommerce-dashboard-nine.vercel.app/">
                  Live Site
                </a>
              </button>
            </span>
          </div>
        </div>

        {/* Shamba Data */}
        <div className="flex text-white flex-col mt-[40px]">
          <img
            src={shamba}
            className="max-w-sm border-white border-2 rounded-lg"
          />
          <div>
            <h3 className="md:ml-[40px] mt-[30px] text-lg">
              I worked at Shamba Data as a web developer. My work included
              designing and Implementitng the companies website and also
              documenting the code for the company's future use.
            </h3>
            <p className="mt-5">
              <em className="font-semi-bold">Technologies used:</em> NextJS,
              Redux, TailwindCSS,NodeJS.
            </p>
            <button className="px-3 py-1 rounded-md mt-5 text-lg font-semibold bg-pink-600">
              <a href="https://shamba-dataa.vercel.app/">Live Site</a>
            </button>
          </div>
        </div>

        {/* Reddit CLone */}
        <div className="flex text-white flex-col mt-[40px]">
          <img
            src={reddit}
            className="max-w-sm border-white border-2 rounded-lg"
          />
          <div>
            <h3 className="md:ml-[40px] mt-[30px] text-lg">
              Build a reddit clone that allows users to post, delete, and update
              their posts, comments and votes.
            </h3>
            <p className="mt-5">
              <em className="font-semi-bold">Technologies used:</em> ReactJS,
              Redux, TailwindCSS, MongoDB, NodeJS
            </p>
            <button className="px-3 py-1 rounded-md mt-5 text-lg font-semibold bg-pink-600">
              <a href="https://github.com/BrightonMboya/Reddit-clone__">
                GitHub Link
              </a>
            </button>
            <span className="ml-7">
              <button className="px-3 py-1 rounded-md mt-5 text-lg font-semibold bg-pink-600">
                <a href="https://reddit-backedn.herokuapp.com/">Live Site</a>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
