import React from "react";
import { StyleLookingClothe } from "../../styles/components/StyleLookingClothe";
import newGoodsImg from "../../assets/images/new_goods_img.png";
import { Link } from "react-router-dom";

const LookingClothe = () => {
  return (
    <StyleLookingClothe className="looking-clothe">
      <div className="looking-clothe__container">
        <div className="row">
          <div className="looking-clothe__image col-lg-6">
            <img src={newGoodsImg} alt="img clothe" />
          </div>
          <div className="looking-clothe__infos col-lg-6">
            <h3 className="looking-clothe__title">
              Создай свой лук на все случаи жизни в “Imperia”
            </h3>
            <p className="looking-clothe__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              sollicitudin a cursus in. Vel sit donec semper magna dignissim.
              Amet, mi justo at metus vestibulum sollicitudin lacus. Nunc vel
              egestas fermentum pellentesque sed vitae vel.
            </p>
            <Link to="/" className="looking-clothe__link">
              начать покупки
            </Link>
          </div>
        </div>
      </div>
    </StyleLookingClothe>
  );
};

export default LookingClothe;
