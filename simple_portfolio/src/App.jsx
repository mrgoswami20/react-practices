import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Project />
      <ContactUs/>
    </>
  );
}

export default App;
