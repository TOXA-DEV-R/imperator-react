import React from "react";
import { StyleNewGoods } from "../../styles/containers/StyleNewGoods";
import cardImg_01 from "../../assets/images/image_01.png";
import cardImg_02 from "../../assets/images/image_02.png";
import cardImg_03 from "../../assets/images/image_03.png";
import cardImg_04 from "../../assets/images/image_04.png";

const NewGoods = () => {
  return (
    <StyleNewGoods>
      <div className="container">
        <div className="row justify-between">
          <div className="col-12">
            <h2 className="global-title">Новые товары</h2>
          </div>
          <div className="card">
            <div className="card__image">
              <img src={cardImg_01} alt="card img" />
            </div>
            <div class="card__body">
              <h4 class="card__title">Lorem ipsum dolor sit amet</h4>
              <p class="card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed
                odio sed nascetur.
              </p>
              <div class="card__price">
                <span>
                  <i class="ic ic_star-yello"></i>
                  <i class="ic ic_star-yello"></i>
                  <i class="ic ic_star-yello"></i>
                  <i class="ic ic_star-yello-line"></i>
                  <i class="ic ic_star-yello-line"></i>
                </span>
                <p>855 у.е.</p>
              </div>
              <button class="card__btn">Добавить в корзину</button>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img src={cardImg_02} alt="card img" />
            </div>
            <div class="card__body">
              <h4 class="card__title">Lorem ipsum dolor sit amet</h4>
              <p class="card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed
                odio sed nascetur.
              </p>
              <div class="card__price">
                <span>
                  <i class="ic ic_star-yello"></i>
                  <i class="ic ic_star-yello"></i>
                  <i class="ic ic_star-yello"></i>
                  <i class="ic ic_star-yello-line"></i>
                  <i class="ic ic_star-yello-line"></i>
                </span>
                <p>855 у.е.</p>
              </div>
              <button class="card__btn">Добавить в корзину</button>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img src={cardImg_03} alt="card img" />
            </div>
            <div class="card__body">
              <h4 class="card__title">Lorem ipsum dolor sit amet</h4>
              <p class="card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed
                odio sed nascetur.
              </p>
              <div class="card__price">
                <span>
                  <i class="ic ic_star-yello"></i>
                  <i class="ic ic_star-yello"></i>
                  <i class="ic ic_star-yello"></i>
                  <i class="ic ic_star-yello-line"></i>
                  <i class="ic ic_star-yello-line"></i>
                </span>
                <p>855 у.е.</p>
              </div>
              <button class="card__btn">Добавить в корзину</button>
            </div>
          </div>
          <div className="card">
            <div className="card__image">
              <img src={cardImg_04} alt="card img" />
            </div>
            <div class="card__body">
              <h4 class="card__title">Lorem ipsum dolor sit amet</h4>
              <p class="card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed
                odio sed nascetur.
              </p>
              <div class="card__price">
                <span>
                  <i class="ic ic_star-yello"></i>
                  <i class="ic ic_star-yello"></i>
                  <i class="ic ic_star-yello"></i>
                  <i class="ic ic_star-yello-line"></i>
                  <i class="ic ic_star-yello-line"></i>
                </span>
                <p>855 у.е.</p>
              </div>
              <button class="card__btn">Добавить в корзину</button>
            </div>
          </div>
        </div>
      </div>
    </StyleNewGoods>
  );
};

export default NewGoods;
