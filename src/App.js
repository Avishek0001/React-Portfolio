import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"
import Header from "./components/header/header"
import Home from "./components/home/home"
import About from "./components/about/about"
import Skill from "./components/skills/skills"
import Contact from "./components/contact/contact"
import Qualification from "./components/qualification/qualification";





function App() {
  return (
    <React.Fragment>
    
      <div>
        <Header/>
        
        <main className="main">
      <Routes>
        <Route path="/" element={ <Home /> }>
        </Route>        
      </Routes>          
          <About />
          <Skill />
          <Qualification />
          <Contact />
          
        </main>
      </div>

    
    </React.Fragment>

  )

}

export default App