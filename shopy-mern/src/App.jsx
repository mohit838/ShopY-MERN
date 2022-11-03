import React from "react";
import { Hero, Sales } from "./component";
import { heroapi, toprateslaes, popularsales } from "./data/data.js";

function App() {
  return (
    <>
      <main>
        <Hero heroapi={heroapi} />
        <Sales endpoint={toprateslaes} />
        <Sales endpoint={popularsales} />
      </main>
    </>
  );
}

export default App;
