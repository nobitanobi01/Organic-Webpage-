import React from "react";
import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import Ship from "./components/Ship";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";
import Ship2 from "./components/Ship2";
import TrendingProduct from "./components/TrendingProduct";
import Reviews from "./components/Reviews";


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Ship />
      <div id="product"><ProductSection /></div>
      <Ship2 />
      <div id="trending"><TrendingProduct /></div>
      <div id="review"><Reviews /></div>
      <Footer/>
    </div>
  );
}

export default App;