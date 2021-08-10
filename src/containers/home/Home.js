import React from "react";
import Header from "../header/Header";
import Hero from "../../components/hero/Hero";
import Advantages from "../../components/advantages/Advantages";
import BestProducts from "../best_products/BestProducts";
import Categories from "../../components/categories/Categories";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <BestProducts />
        <Categories />
      </main>
    </React.Fragment>
  );
};

export default Home;
