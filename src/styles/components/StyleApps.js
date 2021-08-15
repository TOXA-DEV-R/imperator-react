import styled from "styled-components";

export const StyleApps = styled.section`
  height: 400px;
  background: radial-gradient(100% 1071.07% at 0% 0%, #0f0d2b 0%, #0c0926 100%);
  .apps {
    &__container {
      width: 100%;
      height: 100%;
      max-width: 1236px;
      margin: 0 auto;
      .row {
        width: 100%;
        height: 100%;
      }
    }
    &__image {
      width: 372px;
      height: 100%;
      position: relative;
      img {
        width: 100%;
        height: 519px;
        display: block;
        position: absolute;
        bottom: 55.5px;
        left: 0;
      }
    }
    &__infos {
      max-width: 754px;
      &-title {
        margin-top: 40px;
        font-weight: bold;
        font-size: 34px;
        line-height: 140%;
        letter-spacing: 0.25px;
        color: #ffffff;
      }
      &-text {
        margin-top: 24px;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        letter-spacing: 0.44px;
        color: #ffffff;
      }
      &-apps {
        margin-top: 40px;
        img {
          margin-right: 31px;
        }
      }
    }
  }
`;
