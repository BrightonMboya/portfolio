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

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{
              backgroundImage: `url(${shamba})`,
              objectPosition: "cover"
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div w-full h-full bg-no-repeat bg-cover"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-lg ml-3 font-bold text-white tracking-wider">
                Helped Shambda Data have a better experience on the web. I build
                their website using Next, and TailwindCSS
              </span>
              <div className="pt-8 text-center">
                <a href="https://shamba-dataa.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${skope})`,
              objectPosition: "cover"
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div w-full h-full bg-no-repeat bg-cover"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-lg font-bold text-white tracking-wider">
                Build a landing page for a startup using React, and TailWindCSS
              </span>
              <div className="pt-8 text-center">
                <a href="skope.vercel.app" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/BrightonMboya/Skope"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${pet})`, objectPosition: "cover" }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div  w-full h-full bg-no-repeat bg-cover"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-lg font-bold text-white tracking-wider">
                A landing page for a Pet Store using HTML, CSS and JS
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://625d25be854d190d429096ec--merry-crepe-a1321f.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://www.figma.com/file/Oxeoui287KWCbcYWXQspCr/Pet-Store-Landing-Page?node-id=0%3A1">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${reddit})`,
              objectPosition: "cover"
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div w-full h-full bg-no-repeat bg-cover"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-lg font-bold text-gray-100 tracking-wider">
                A Reddit Clone that allows users support CRUD on posts, comments
                and vots. Build with MERN
              </span>
              <div className="pt-8 text-center">
                <a href="https://reddit-backedn.herokuapp.com/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://www.figma.com/file/Oxeoui287KWCbcYWXQspCr/Pet-Store-Landing-Page?node-id=0%3A1"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{
              backgroundImage: `url(${portfolio})`,
              objectPosition: "cover"
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div  bg-no-repeat bg-cover md:h-[20vh]"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-lg font-bold text-white tracking-wider">
                A portfolio Template for software engineers. Made with HTML,
                TailWindCSS, and JS.
              </span>
              <div className="pt-8 text-center">
                <a href="https://625ed8d3fd62bb26db0b6dde--merry-crepe-a1321f.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
