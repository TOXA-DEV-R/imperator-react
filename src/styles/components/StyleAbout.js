import styled from "styled-components";

export const StyleAbout = styled.section`
  .global-title {
    margin-top: 64px;
  }
  .about {
    &-infos {
      max-width: 557px;
      &__title {
        margin-top: 87px;
        font-weight: bold;
        font-size: 24px;
        line-height: 140%;
        color: #000;
      }
      &__text {
        margin-top: 24px;
        font-weight: normal;
        font-size: 14px;
        line-height: 170%;
        letter-spacing: 0.25px;
        color: #000;
      }
    }
    &-image {
      max-width: 460px;
      max-width: 412px;
      margin-top: 25px;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
`;
