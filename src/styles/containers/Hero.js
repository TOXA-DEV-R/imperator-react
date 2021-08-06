import styled from "styled-components";

export const StyleHero = styled.div`
  background: linear-gradient(99.05deg, #e1aa00 0%, #ffc000 74.72%);
  .hero {
    &-container {
      position: relative;
      z-index: 2;
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 396px;
        background-color: #000;
        transform: translateY(-50%);
        z-index: -1;
      }

      &__right-image {
        width: 512px;
        height: 788px;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }

      &__title {
        margin-top: 233px;
        font-weight: bold;
        font-size: 34px;
        line-height: 140%;
        letter-spacing: 0.25px;
        color: #fff;
      }

      &__text {
        margin-top: 16px;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.1px;
        color: #fff;
      }

      &__link {
        margin-top: 24px;
        font-weight: 600;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.75px;
        text-transform: uppercase;
        color: #ffc000;
        display: flex;
        align-items: center;
        .ic {
          width: 8px;
          height: 8px;
          margin-right: 4px;
          background: #ffc000;
        }
      }
    }
  }
  .swiper-container {
    .swiper-pagination {
      .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        margin: 0 18px;
        background: #0d0d0d;
        border-radius: 50%;
        position: relative;
        transition: all 200ms ease-in-out;

        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          display: flex;
          width: 32px;
          height: 32px;
          border: 1px solid #0d0d0d;
          transform: translate(-50%, -50%) scale(0);
          border-radius: 50%;
          transition: all 200ms ease-in-out;
        }
        &-active {
          background: #0d0d0d;
          &::after {
            transform: translate(-50%, -50%) scale(1);
          }
        }
      }
    }
  }
`;
