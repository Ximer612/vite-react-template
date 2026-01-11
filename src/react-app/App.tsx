// src/App.tsx

import { useState } from "react";
import "./App.css";
import Header from "./Header";
import LoremIpsum from "./LoremIpsum";

function App() {
  return (
    <>
    <Header />
    <div>
      <h1>Test Test</h1>
        <LoremIpsum />
      </div>
    </>
  );
}

export default App;
