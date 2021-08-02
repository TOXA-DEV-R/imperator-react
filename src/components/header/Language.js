import React from "react";
import { StyleLanguage } from "../../styles/components/StyleLanguage";

const Language = () => {
  return (
    <StyleLanguage className="language">
      <div className="container">
        <div className="language__btns row">
          <span className="language__btn active">RU</span>
          <span className="language__btn">UZB</span>
        </div>
      </div>
    </StyleLanguage>
  );
};

export default Language;
