import React from "react";
import "./App.less";
import { Routes } from "./routes";

function App() {
  return (
    <div className="App">
      <div className="Banner">
        <div className="Banner-description">
          Swap is a Demo Version and unaudited for Geni Teams. Use at your own risk.
        </div>
      </div>
      <Routes />
    </div>
  );
}

export default App;
