<<<<<<< HEAD
import Navbar from "./components/Navbar";
import Home from "./components/Home";
=======
// import Home from "./pages/Home";
import Home from "./components/Home";
>>>>>>> c4629b04edbe714a2f3e5cc355582d504eae4a1c
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
