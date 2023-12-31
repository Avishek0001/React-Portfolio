import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/about/Projects.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <React.StrictMode>
    <Routes>
        <Route exact path="/" element={ <App /> }>
        </Route>
        <Route path="/projects" element={ <Projects /> }>
        </Route>
      </Routes>
    </React.StrictMode>
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
