import React from "react";
import darkModeImage from "../assets/moon.png";
import lightModeImage from "../assets/sun.png";

function Navbar() {
  const darkModeChangeHandler = () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
    const image = document.querySelector("img");
    if (body.classList.contains("dark")) {
      image.src = lightModeImage;
    } else {
      image.src = darkModeImage;
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-10 shadow-sm backdrop-blur-sm" >
      <nav className="flex justify-between p-4 md:px-20 items-center ">
        {/* -----------------------------------Logo----------------------------------- */}
        <a className="font-semibold text-4xl items-center text-purple-500 cursor-pointer" href="#home">
          MrGoswami
        </a>
        {/* -----------------------------------Navigation----------------------------------- */}
        <div className=" flex items-center gap-10 ">
          {[
            ["ABOUT", "about"],
            ["SKILLS", "skills"],
            ["PROJECTS", "project"],
            ["CONTACT", "contact-us"],
          ].map(([title, url]) => (
            <a
            href={`#${url}`}
              className="font-medium text-sm cursor-pointer hover hover:font-semibold hover:text-purple-400"
            >
              {title}
            </a>
          ))}
          {/* -----------------------------------Dark Mode----------------------------------- */}
          <img
            src={darkModeImage}
            onClick={darkModeChangeHandler}
            className=" w-6 cursor-pointer"
            alt=""
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
