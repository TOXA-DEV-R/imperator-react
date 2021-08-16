import React from "react";
import { StyleAbout } from "../../styles/components/StyleAbout";
import about_img from "../../assets/images/about_img.png";

const About = () => {
  return (
    <StyleAbout className="about">
      <div className="container">
        <div className="row justify-between">
          <div className="col-12">
            <h3 className="global-title">О нас</h3>
          </div>
          <div className="about-infos">
            <h4 className="about-infos__title">
              «Потрясающий опыт, мне это нравится много. Спасибо команде.
            </h4>
            <p className="about-infos__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
              leo, in sit tellus fermentum donec quisque diam molestie. Enim
              purus ullamcorper ultricies nisi. Eu sit laoreet egestas nascetur
              lacinia donec nunc viverra. Eu nullam cras eget egestas dui id
              platea magna. Massa lorem ultrices mauris tellus, mattis eu leo
              bibendum lobortis.
            </p>
          </div>
          <div className="about-iamge">
            <img src={about_img} alt="clothes img" />
          </div>
        </div>
      </div>
    </StyleAbout>
  );
};

export default About;
