import React from "react";
import { Hero, Sales } from "./component";
import { heroapi, toprateslaes, popularsales } from "./data/data.js";

function App() {
  return (
    <>
      <main className="flex flex-col gap-16 relativ">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <Sales endpoint={toprateslaes} ifExists />
      </main>
    </>
  );
}

export default App;
