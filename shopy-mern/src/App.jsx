import React from "react";
import { Hero } from "./component";
import { heroapi } from "./data/data.js";

function App() {
  return (
    <>
      <main>
        <Hero heroapi={heroapi} />
      </main>
    </>
  );
}

export default App;
