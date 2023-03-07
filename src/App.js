import * as React from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";
import About from "./components/about";
import Clients from "./components/clients";
import Contact from "./components/contact";
import Menu from "./components/menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/system";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm" sx={{
        marginTop: "50px"
      }}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route exact path="about" element={<About />} />
            <Route exact path="clients" element={<Clients />} />
            <Route exact path="contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
