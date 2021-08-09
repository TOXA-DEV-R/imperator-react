import styled from "styled-components";

export const StylesAdvantages = styled.div`
  background: #e5e5e5;

  .global-title {
    margin-top: 67px;
  }
  .advantages {
    &__card {
      width: 294px;
      height: 144px;
      margin-top: 24px;
      background: #ffffff;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &-icon {
        .ic {
          width: 24px;
          height: 24px;
        }
      }
      &-text {
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        letter-spacing: 0.44px;
        margin-top: 45px;
      }
    }
  }
`;
