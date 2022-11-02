import React from "react";
import { Hero } from "./component";
import { heroapi, Sales } from "./data/data.js";

function App() {
  return (
    <>
      <main>
        <Hero heroapi={heroapi} />
        <Sales />
      </main>
    </>
  );
}

export default App;
