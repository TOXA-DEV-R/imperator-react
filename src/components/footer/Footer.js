import React from "react";
import { StyleFooter } from "../../styles/components/StyleFooter";
import brandLogo from "../../assets/icons/brand_logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <StyleFooter className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-left">
            <h4 className="footer-title">про imperia</h4>
            <p className="footer-left__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              pretium aenean dignissim sit cursus dictumst adipiscing nunc.
            </p>
            <img
              className="footer-left-logo"
              src={brandLogo}
              alt="brand-logo"
            />
          </div>
          <div className="footer-right justify-between">
            <div className="footer-contacts">
              <h4 className="footer-title">контакты</h4>
              <p className="footer-contacts-text" style={{ marginTop: "16px" }}>
                +998 90 958 78 87
              </p>
              <p className="footer-contacts-text">support@fonon.uz</p>
              <h4 className="footer-title" style={{ marginTop: "38px" }}>
                рабочее время
              </h4>
              <p className="footer-contacts-text" style={{ marginTop: "16px" }}>
                По будням 9:00 to 18:00
              </p>
              <p className="footer-contacts-text">В выходные 11:00 to 18:00</p>
            </div>
            <ul className="footer-menu">
              <h4 className="footer-title">Меню</h4>
              <li>
                <Link to="/" className="footer-menu__link">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-menu__link">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-menu__link">
                  Категории
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-menu__link">
                  Сотрудничество
                </Link>
              </li>
            </ul>
            <ul className="footer-categories">
              <h4 className="footer-title">категории</h4>
              <li>
                <Link
                  to="/"
                  className="footer-categories__link"
                  style={{ marginTop: "16px" }}
                >
                  Женская одежда
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-categories__link">
                  Мужская одежда
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-categories__link">
                  Детская одежда
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-categories__link">
                  Обувь
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-categories__link">
                  Сумки
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-categories__link">
                  Аксесуары
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyleFooter>
  );
};

export default Footer;
