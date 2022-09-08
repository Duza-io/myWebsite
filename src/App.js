import React from "react";
import About from "./components/About";
//import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Form from "./components/Form";

function App() {
  return (
    <main className="text-gray-400 dark:bg-black body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Form />
    </main>
  );
}

export default App;
