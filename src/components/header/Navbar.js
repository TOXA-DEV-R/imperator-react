import React from "react";
import { Link } from "react-router-dom";
import { StyleNavbar } from "../../styles/components/StyleNavbar";
import brandLogo from "../../assets/icons/MILANDI.svg";
const Navbar = () => {
  return (
    <StyleNavbar className="navbar">
      <div className="container">
        <div className="row justify-between align-center">
          <div className="col-auto">
            <Link to="/" className="navbar__barnd-logo">
              <img src={brandLogo} alt="brand-logo" />
            </Link>
          </div>
          <div className="col-auto">
            <div className="navbar-links">
              <Link to="/home" className="navbar-links__link">
                Главная
              </Link>
              <Link to="/about" className="navbar-links__link">
                О нас
              </Link>
              <Link to="/categories" className="navbar-links__link">
                Категории
              </Link>
              <Link to="/cooperation" className="navbar-links__link">
                Сотрудничество
              </Link>
            </div>
          </div>
          <div className="col-auto">
            <div className="navbar-register">
              <button className="navbar-register__sign-in">Войти</button>
              <button className="navbar-register__sign-up">
                Зарегистрироваться
              </button>
              <button className="navbar-register__card">
                <i className="ic ic_card"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </StyleNavbar>
  );
};

export default Navbar;
