import React from "react";
import Header from "../header/Header";
import Hero from "../hero/Hero";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
      </main>
    </React.Fragment>
  );
};

export default Home;
