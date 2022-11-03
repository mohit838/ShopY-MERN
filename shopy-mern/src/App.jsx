import React from "react";
import { Hero, Sales } from "./component";
import { heroapi } from "./data/data.js";

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
