import React from "react";
import Home from "./Home";
import About from "./About";

function Navbar() {
  return (
    <div className=" bg-white ">
      <nav className="flex justify-between p-4 md:px-20 items-center">
        <div className="font-semibold text-4xl items-center text-purple-400" >MrGoswami</div>
        <div className=" flex gap-10 ">
          {[
            ["HOME", "/home"],
            ["ABOUT", "/about"],
            ["PROJECTS", "/projects"],
            ["CONTACT", "/contact"],
          ].map(([title, url]) => (
            <p onClick={url} className="font-medium text-sm cursor-pointer hover hover:font-semibold hover:text-purple-400">
              {title}
            </p>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
