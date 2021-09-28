import React from "react";
import Carousel from "./component/Carousel";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Section from "./component/Section";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Carousel />
      <Section />
    </div>
  );
};

export default App;
