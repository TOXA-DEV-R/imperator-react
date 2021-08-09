import React from "react";
import Header from "../header/Header";
import Hero from "../../components/hero/Hero";
import Advantages from "../../components/advantages/Advantages";
import BestProducts from "../best_products/BestProducts";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <BestProducts />
      </main>
    </React.Fragment>
  );
};

export default Home;
