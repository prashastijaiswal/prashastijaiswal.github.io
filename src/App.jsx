import { useState } from "react";
import { TopBox } from "./components/TopBox";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Activities } from "./components/Activities";
import { Booking } from "./components/Booking";
import { Gallery } from "./components/Gallery";

function App() {
  return (
    <div>
      <TopBox />
      <NavBar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
    </div>
  );
}

export default App;
