import React from "react";
import profileImage from "../assets/profile.png";

function Home() {
  return (
    <div className="bg-white dark:bg-slate-800 flex md:justify-center items-center h-screen" id="home">
      {/* -----------------------------------Profile----------------------------------- */}
      <div className="flex flex-col md:gap-1">
        <p className="font-medium md:text-6xl text-3xl pl-4">
          Hi, <br />I am Rohit Kumar Goswami
        </p>
        <p className="font-medium pl-4 md:text-5xl text-2xl text-purple-400 motion-reduce:text-start ">
          a Blockchain Developer
        </p>
        <div>
          <button className=" border-purple-400 border-2 rounded-md hover:text-white hover:bg-purple-400 active:scale-50 p-2 md:m-4 ml-4">
            Hire me
          </button>
        </div>
      </div>
      {/* -----------------------------------Profile Image----------------------------------- */}
      <div>
        <img className="md:w-[40rem]" src={profileImage} />
      </div>
    </div>
  );
}

export default Home;
