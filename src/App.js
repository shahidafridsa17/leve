import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Product from "./components/Products/Product";
// import { Provider } from "react-redux";
// import store from "./Helper Func/store";

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
      // </Provider>
    );
  }
}

export default App;
