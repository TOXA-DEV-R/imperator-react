import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.min.css";
import { StyleHero } from "../../styles/components/StyleHero";
import slideImage from "../../assets/images/hero_img_01.png";
import { Link } from "react-router-dom";
import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);

const Hero = () => {
  return (
    <StyleHero className="hero">
      <Swiper pagination={true}>
        <SwiperSlide className="hero-container">
          <div className="container">
            <div className="row">
              <div className="hero-container__left col-lg-7">
                <h3 className="hero-container__title">
                  Быстрый и удобный шоппинг, не выходя из дома.
                </h3>
                <p className="hero-container__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Convallis lectus odio vitae, duis nec ut velit, fermentum.
                  Diam sollicitudin arcu euismod morbi. Adipiscing bibendum
                  elementum, fermentum amet quis erat.
                </p>
                <Link to="/" className="hero-container__link">
                  <i className="ic ic_polygon"></i>
                  Все товары
                </Link>
              </div>
              <div className="hero-container__right col-lg-5">
                <div className="hero-container__right-image">
                  <img src={slideImage} alt="clothes img" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hero-container">
          <div className="container">
            <div className="row">
              <div className="hero-container__left col-lg-7">
                <h3 className="hero-container__title">
                  Быстрый и удобный шоппинг, не выходя из дома.
                </h3>
                <p className="hero-container__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Convallis lectus odio vitae, duis nec ut velit, fermentum.
                  Diam sollicitudin arcu euismod morbi. Adipiscing bibendum
                  elementum, fermentum amet quis erat.
                </p>
                <Link to="/" className="hero-container__link">
                  <i className="ic ic_polygon"></i>
                  Все товары
                </Link>
              </div>
              <div className="hero-container__right col-lg-5">
                <div className="hero-container__right-image">
                  <img src={slideImage} alt="clothes img" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hero-container">
          <div className="container">
            <div className="row">
              <div className="hero-container__left col-lg-7">
                <h3 className="hero-container__title">
                  Быстрый и удобный шоппинг, не выходя из дома.
                </h3>
                <p className="hero-container__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Convallis lectus odio vitae, duis nec ut velit, fermentum.
                  Diam sollicitudin arcu euismod morbi. Adipiscing bibendum
                  elementum, fermentum amet quis erat.
                </p>
                <Link to="/" className="hero-container__link">
                  <i className="ic ic_polygon"></i>
                  Все товары
                </Link>
              </div>
              <div className="hero-container__right col-lg-5">
                <div className="hero-container__right-image">
                  <img src={slideImage} alt="clothes img" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </StyleHero>
  );
};

export default Hero;
