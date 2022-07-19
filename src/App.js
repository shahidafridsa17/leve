import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Product from "./components/Products/Product";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    );
  }
}

export default App;
