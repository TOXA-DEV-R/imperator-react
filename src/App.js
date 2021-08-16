import React from "react";
import Home from "./pages/home/Home";
import { BasicDiv } from "./styles/global";
import Header from "./containers/header/Header";
import "./styles/styles.scss";
import Footer from "./components/footer/Footer";
import { Switch, Route } from "react-router-dom";
import PageAbout from "./pages/about/PageAbout";

const App = () => {
  return (
    <BasicDiv>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={PageAbout} />
      </Switch>
      <Footer />
    </BasicDiv>
  );
};

export default App;
