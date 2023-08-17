import { useState } from "react";
import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero />
      </main>
  );
};

export default App;
