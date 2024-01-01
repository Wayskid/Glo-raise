import React, { useEffect, useState } from "react";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import For_Funders from "./pages/For_Funders";
import Legal from "./pages/Legal";
import About from "./pages/About";

export default function App() {
  return (
    <div className="h-full">
      <Nav />
      <div className="mt-[93px]">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/for_funders" element={<For_Funders />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/legal" element={<Legal />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
