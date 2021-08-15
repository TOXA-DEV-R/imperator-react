import styled from "styled-components";

export const StyleLookingClothe = styled.section`
  .looking-clothe {
    &__container {
      max-width: 1440px;
      width: 100%;
      margin: 0 auto;
    }
    &__image {
      height: 470px;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    &__infos {
      padding: 32px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #fff;
    }
    &__title {
      max-width: 556px;
      font-weight: bold;
      font-size: 34px;
      line-height: 140%;
      letter-spacing: 0.25px;
      color: #0d0d0d;
    }
    &__text {
      max-width: 556px;
      margin-top: 24px;
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: 0.44px;
      color: #000000;
    }
    &__link {
      width: 197px;
      height: 36px;
      margin-top: 24px;
      font-weight: 600;
      font-size: 14px;
      line-height: 14px;
      letter-spacing: 0.75px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      background: #ffc000;
      border: none;
      border-radius: 6px;
      color: #000000;
    }
  }
`;
