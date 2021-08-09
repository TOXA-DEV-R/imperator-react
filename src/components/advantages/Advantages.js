import React from "react";
import { StylesAdvantages } from "../../styles/components/StylesAdvantages";

const Advantages = () => {
  return (
    <StylesAdvantages className="advantages">
      <div className="container">
        <div className="row justify-between">
          <div className="col-12">
            <h2 className="global-title">Наши преимущества</h2>
          </div>
          <div className="advantages__card">
            <div className="advantages__card-icon">
              <i className="ic ic_stars"></i>
            </div>
            <p className="advantages__card-text">Лучший сервис</p>
          </div>
          <div className="advantages__card">
            <div className="advantages__card-icon">
              <i className="ic ic_truck"></i>
            </div>
            <p className="advantages__card-text">Экспресс доставка </p>
          </div>
          <div className="advantages__card">
            <div className="advantages__card-icon">
              <i className="ic ic_like"></i>
            </div>
            <p className="advantages__card-text">Лучшее качество в стране</p>
          </div>
        </div>
      </div>
    </StylesAdvantages>
  );
};

export default Advantages;
