import React from "react";
import Hero from "../../components/hero/Hero";
import Advantages from "../../components/advantages/Advantages";
import BestProducts from "../../containers/best_products/BestProducts";
import Categories from "../../components/categories/Categories";
import Apps from "../../components/apps/Apps";
import NewGoods from "../../containers/new_goods/NewGoods";
import LookingClothe from "../../components/looking_clothes/LookingClothe";
import Discount from "../../components/discount/Discount";

const Home = () => {
  return (
    <React.Fragment>
      <main>
        <Hero />
        <Advantages />
        <BestProducts />
        <Categories />
        <Apps />
        <NewGoods />
        <LookingClothe />
        <Discount />
      </main>
    </React.Fragment>
  );
};

export default Home;
