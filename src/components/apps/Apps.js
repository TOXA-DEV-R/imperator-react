import React from "react";
import { Link } from "react-router-dom";
import appsImg from "../../assets/images/apps_img.png";
import appsLinkImg_01 from "../../assets/images/link-apps-img_01.png";
import appsLinkImg_02 from "../../assets/images/link-apps-img_02.png";
import { StyleApps } from "../../styles/components/StyleApps";

const Apps = () => {
  return (
    <StyleApps style={{ width: "100%" }} className="apps">
      <div className="apps__container">
        <div className="row justify-between">
          <div className="apps__image">
            <img src={appsImg} alt="apps__image" />
          </div>
          <div className="apps__infos">
            <h2 className="apps__infos-title">
              Скачай приложение и получай призы каждый день
            </h2>
            <p className="apps__infos-text">
              Скачав наш приложение вы получаете возможность играть в призовые
              игры каждый день и выигровать разного рода подарки для себя. В
              нашем приложении призовые игры проходят аблолютно каждый день и
              всё это совершенно бесплатно.
            </p>
            <div className="apps__infos-apps">
              <Link to="/">
                <img src={appsLinkImg_01} alt="img apps" />
              </Link>
              <Link to="/">
                <img src={appsLinkImg_02} alt="img apps" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </StyleApps>
  );
};

export default Apps;
