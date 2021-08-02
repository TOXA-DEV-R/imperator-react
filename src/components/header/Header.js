import React from "react";
import Language from "./Language";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <Language />
      <div className="container">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
