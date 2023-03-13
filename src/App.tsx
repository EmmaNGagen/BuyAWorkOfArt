import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/pages/Home";
import { Layouts } from "./components/Layouts";
import { About } from "./components/pages/About";
import { Login } from "./components/pages/Login";
import { Artwork } from "./components/pages/Artwork";
import { Checkout } from "./components/pages/Checkout";
import { Art } from "./components/pages/Art";
import { NoMatch } from "./components/pages/NoMatch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />}></Route>
          <Route path="/artwork" element={<Artwork />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/art/:slug" element={<Art />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
