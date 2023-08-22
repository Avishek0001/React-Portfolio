import React from "react";
import { Routes,Route } from "react-router-dom";
import "./App.css"
import Header from "./components/header/header"
import Home from "./components/home/home"
import About from "./components/about/about"
import Skill from "./components/skills/skills"
import Contact from "./components/contact/contact"
import Qualification from "./components/qualification/qualification";
import Projects from "./components/about/Projects";




function App(){
  return(
    <React.Fragment>

    <div>
      <Header/>
      <main className="main">
        <Home/>
        <About/>
        <Skill/>
        {/* <Services/> */}
        <Qualification/>
        <Contact/>
      </main>
    </div>
    {/* <Routes>
    <Route path="/delete" element={<Projects />} />
    </Routes> */}
    </React.Fragment>

  )

}

export default App