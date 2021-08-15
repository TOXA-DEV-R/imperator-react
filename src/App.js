import React from "react";
import Home from "./containers/home/Home";
import { BasicDiv } from "./styles/global";
import Header from "./containers/header/Header";
import "./styles/styles.scss";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <BasicDiv>
      <Header />
      <Home />
      <Footer />
    </BasicDiv>
  );
};

export default App;
