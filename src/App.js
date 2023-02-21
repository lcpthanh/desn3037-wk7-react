import * as React from "react";
import "./App.css";
import About from "./components/about";
import Clients from "./components/clients";
import Contact from "./components/contact";
import Menu from "./components/menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu/>
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
