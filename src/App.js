// REACT
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./Couter";
import Header from "./Header";
import Welcome from "./Welcome";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Greeting from "./Greeting";
import HTTP from "./HTTP";

const GlobalStyle = createGlobalStyle`
  ${reset}
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/http" element={<HTTP />} />
      </Routes>
    </Router>
  );
};

export default App;
