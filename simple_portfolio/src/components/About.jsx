import cppLogo from "../assets/cpp_logo.png";
import reactLogo from "../assets/react_logo.png";
import solidityLogo from "../assets/solidity_logo.png";
import nodeLogo from "../assets/node_logo.png";
import htmlCssJsLogo from "../assets/html_css_js_logo.png";
import githubLogo from "../assets/github_logo.png";
import figmaLogo from "../assets/figma_logo.png";

function About() {
  return (
    <div className="md:flex flex-wrap justify-center items-center md:p-24 p-8 md:gap-8 bg-purple-100 " id="about">
      {/* -----------------------------------About Me----------------------------------- */}
      <div className="flex flex-col items-center md:w-1/2 ">
        <h1 className="text-4xl font-semibold pb-10">About Me</h1>
        <p className="font-[jersey-10-regular]">
          Hi, I am Rohit Kumar Goswami, a final year student, pursuing Computer
          Science and Engineering from Chandigarh University, Mohali, Punjab.
          <br />
          <br />
          As a computer science student, I have a strong foundation in
          programming, software development, and computer science theory. I am
          experienced in C++ and have developed several web development
          projects. My experience includes Blockcahin Development, Software
          Development applications and front-end development with React. I have
          worked on Web Development, Blockchain development and Android
          projects.
        </p>
      </div>
      {/* -----------------------------------Skills and Tools----------------------------------- */}
      <div className="flex flex-col items-center md:w-1/2 ">
        <h1 className="text-4xl justify-center font-semibold pb-10">
          Skills & Tools
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {[
            "C++",
            "HTML",
            "CSS",
            "JavaScript",
            "MySQL",
            "Solidity",
            "Tailwind CSS",
            "truffle",
            "Web3.js",
            "Hardhat",
            "Vite.js",
            "Next.js",
            "Redux",
            "Remix IDE",
            "Metamask",
            "React Router",
            "React",
            "Node.js",
            "Android Studio",
            "Firebase",
            "Git",
            "GitHub",
            "VS Code",
            "Figma",
          ].map((skill) => (
            <div className="bg-purple-200 p-2 rounded-md">{skill}</div>
          ))}
        </div>
        {/* <div className="flex flex-wrap items-center gap-6 p-2">
          <img src={cppLogo} alt="" className="w-16 animate-pulse" />
          <img src={figmaLogo} alt="" className="w-16 animate-pulse" />
          <img src={githubLogo} alt="" className="w-16" />
          <img src={htmlCssJsLogo} alt="" className="w-44 animate-pulse" />
          <img src={nodeLogo} alt="" className="w-16 animate-pulse" />
          <img src={reactLogo} alt="" className="w-16 animate-pulse" />
          <img src={solidityLogo} alt="" className="w-20 animate-pulse" />
        </div> */}
      </div>
    </div>
  );
}

export default About;
