import React from "react";
import Home from "./containers/home/Home";
import { BasicDiv } from "./styles/global";
import "./styles/styles.scss";

const App = () => {
  return (
    <BasicDiv>
      <Home />
    </BasicDiv>
  );
};

export default App;
