import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    <Navbar/>
      <Home />
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;