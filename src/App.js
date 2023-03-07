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
import { Box, Container } from "@mui/system";

import Counter from "./components/counter"

import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Container maxWidth="sm" sx={{ mt: 5 }}>
          <BrowserRouter>
            <Box sx={{ mb: 3 }}>
              <Menu />
            </Box>
            <Routes>
              <Route exact path="about" element={<About />} />
              <Route exact path="clients" element={<Clients />} />
              <Route exact path="contact" element={<Contact />} />
              <Route exact path="counter" element={<Counter />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </Provider>
    </div>
  );
}

export default App;
