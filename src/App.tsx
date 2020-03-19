import React from "react";
import ButtonAppBar from "./components/navbar";
import { Main } from "./components/main";
import { MemoryRouter as Router } from "react-router";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <ButtonAppBar />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
