import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 pl-4 border-pink-600">
              About
            </p>
          </div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hello Again, It's Brighton. Get a chance to know me a lil bit</p>
          </div>
          <div>
            <p className="text-lg">
              Brighton is Software Engineer who leverages tech to build
              solutions for users and help solve business problems. Currently
              pursuing a bachelor degree in Computer Science at the African
              Leadership University. Outside work, he loves jamming along with
              Blues and Pop music on Piano. And yeah, he loves hosting, we can
              set up a brunch and discuss a thing or two. Feel free to reach out
              if you want to grab a brunch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
