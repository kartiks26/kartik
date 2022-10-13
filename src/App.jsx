import React from "react";
import "./App.scss";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Landing from "./components/Landing/Landing";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Skills />
      <Projects />
      {/* <Education /> */}
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
