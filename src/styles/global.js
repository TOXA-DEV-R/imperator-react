import styled from "styled-components";

export const BasicDiv = styled.div`
  .card {
    width: 264px;
    margin-top: 32px;
    border-radius: 12px;
    &__image {
      width: 100%;
      height: 337px;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    &__body {
      padding: 8px 13px;
      background-color: #fff;
    }
    &__title {
      font-weight: 600;
      font-size: 14px;
      line-height: 140%;
      letter-spacing: 0.75px;
      text-transform: uppercase;
      color: #000000;
    }
    &__text {
      margin-top: 8px;
      font-weight: 500;
      font-size: 12px;
      line-height: 140%;
      letter-spacing: 0.4px;
      color: #000000;
    }
    &__price {
      display: flex;
      justify-content: space-between;
      span {
        margin-top: 8px;
        display: block;
        .ic {
          width: 12px;
          height: 12px;
          background-color: #ffc000;
          cursor: pointer;
        }
      }
      p {
        margin-top: 4px;
        font-weight: bold;
        font-size: 10px;
        line-height: 140%;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: #000000;
      }
    }
    &__btn {
      width: 100%;
      height: 36px;
      margin-top: 12px;
      font-weight: 600;
      font-size: 14px;
      line-height: 140%;
      letter-spacing: 0.75px;
      text-transform: uppercase;
      background: #ffc000;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
  }

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .container {
    max-width: 1150px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .col-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
    position: relative;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .justify-around {
    justify-content: space-around;
  }

  .justify-unset {
    justify-content: unset;
  }

  .align-center {
    align-items: center;
  }

  .align-unset {
    align-items: unset;
  }

  .flex-column {
    flex-direction: column;
  }

  .flex-unset {
    flex-direction: unset;
  }

  .display-none {
    display: none;
  }

  .display-flex {
    display: flex;
  }
`;
