import styled from "styled-components";

export const StylesCategories = styled.section`
  padding-bottom: 245px;
  background: #e5e5e5;

  .global-title {
    margin-top: 64px;
  }

  .categories {
    &-card {
      width: 264px;
      height: 352px;
      margin-top: 30px;
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      &__image {
        width: 100%;
        height: 100%;
        transform: translateY(0);
        transition: all 250ms ease-in-out;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      &__link {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0;
        font-weight: bold;
        font-size: 24px;
        line-height: 33.6px;
        color: #ffc000;
        background: #0d0d0d;
        border-radius: 0px 0px 8px 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        transition: all 250ms ease-in-out;
      }
      &:hover {
        .categories-card__image {
          transform: translateY(-78px);
        }
        .categories-card__link {
          height: 78px;
        }
      }
    }
  }
`;
