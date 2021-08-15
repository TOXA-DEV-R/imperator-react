import styled from "styled-components";

export const StyleFooter = styled.footer`
  background-color: #fff;
  padding-bottom: 48px;

  > .container {
    > .row {
      flex-wrap: unset;
    }
  }

  .footer-title {
    margin-top: 46px;
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.75px;
    text-transform: uppercase;
  }
  .footer {
    &-left {
      max-width: 265px;
      &__text {
        margin-top: 16px;
        font-weight: normal;
        font-size: 14px;
        line-height: 160%;
        letter-spacing: 0.25px;
      }
      &-logo {
        margin-top: 15px;
      }
    }
    &-contacts {
      width: 187px;
      margin-left: 29px;
      &-text {
        margin-top: 10px;
        font-weight: normal;
        font-size: 14px;
        line-height: 160%;
        letter-spacing: 0.25px;
        color: #000000;
      }
    }

    &-right {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    &-menu {
      max-width: 125px;
      list-style: none;
      &__link {
        display: block;
        margin-top: 16px;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.25px;
        color: #000000;
      }
    }
    &-categories {
      max-width: 131px;
      list-style: none;
      &__link {
        margin-top: 10px;
        display: block;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.25px;
        color: #000000;
      }
    }
  }
`;
