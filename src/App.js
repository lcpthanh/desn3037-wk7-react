import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./components/about";
import Clients from "./components/clients";
import Contact from "./components/contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="about" element={<About/>}/>  
          <Route exact path="clients" element={<Clients/>}/>  
          <Route exact path="contact" element={<Contact/>}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
