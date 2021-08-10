import React from "react";
import { Link } from "react-router-dom";
import { StylesCategories } from "../../styles/components/StylesCategories";
import img_01 from "../../assets/images/image_05.png";
import img_02 from "../../assets/images/image_06.png";
import img_03 from "../../assets/images/image_07.png";
import img_04 from "../../assets/images/image_08.png";

const Categories = () => {
  return (
    <StylesCategories className="categories">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="global-title">Категории</h2>
          </div>
          <div className="categories-card">
            <div className="categories-card__image">
              <img src={img_01} alt="img" />
            </div>
            <Link to="/" className="categories-card__link">
              Женская обувь
            </Link>
          </div>
        </div>
      </div>
    </StylesCategories>
  );
};

export default Categories;
