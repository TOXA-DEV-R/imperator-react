import styled from "styled-components";

export const StylesCategories = styled.section`
  background: #e5e5e5;
  .categories {
    .global-title {
      margin-top: 64px;
    }
    &-card {
      width: 264px;
      height: 352px;
      &__image {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
    }
  }
`;
