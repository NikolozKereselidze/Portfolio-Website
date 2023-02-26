import React from "react";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
};

export default App;
