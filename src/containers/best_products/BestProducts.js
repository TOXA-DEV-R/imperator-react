import React from "react";
import { StyleBestProducts } from "../../styles/containers/StyleBestProducts";
import image_01 from "../../assets/images/image_01.png";
import image_02 from "../../assets/images/image_02.png";
import image_03 from "../../assets/images/image_03.png";
import image_04 from "../../assets/images/image_04.png";

const BestProducts = () => {
  return (
    <StyleBestProducts className="best-products">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="global-title">Лучшие товары</h2>
          </div>
          <div className="best-products__card card">
            <div className="card">
              <div className="card__image">
                <img src={image_01} alt="img" />
              </div>
              <div className="card__body">
                <h4 className="card__title">Lorem ipsum dolor sit amet</h4>
                <p className="card__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  sed odio sed nascetur.
                </p>
                <div className="card__price">
                  <span>
                    <i className="ic ic_star-yello"></i>
                    <i className="ic ic_star-yello"></i>
                    <i className="ic ic_star-yello"></i>
                    <i className="ic ic_star-yello-line"></i>
                    <i className="ic ic_star-yello-line"></i>
                  </span>
                  <p>855 у.е.</p>
                </div>
                <div className="card__btn">Добавить в корзину</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleBestProducts>
  );
};

export default BestProducts;
