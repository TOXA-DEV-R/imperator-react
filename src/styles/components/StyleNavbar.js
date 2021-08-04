import styled from "styled-components";

export const StyleNavbar = styled.nav`
  background: #fff;
  .navbar {
    &-links {
      display: flex;
      padding: 20px 0;
    }
    &-links__link {
      margin-right: 28px;
      font-weight: 500;
      font-size: 14px;
      line-height: 14px;
      letter-spacing: 0.1px;
      color: #000;
    }
    &-register {
      display: flex;
      align-items: center;
      button {
        padding: 4px 8px;
        font-weight: normal;
        font-size: 16px;
        line-height: 14px;
        letter-spacing: 0.44px;
        color: #0d0d0d;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      &__sign-in {
        margin-right: 15px;
        background: rgba(0, 0, 0, 0.05);
      }
      &__sign-up {
        margin-right: 39px;
        background: #ffc000;
      }
      &__card {
        padding: 0 !important;
        border: none !important;
        background-color: #fff;
        cursor: pointer;
        .ic {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
`;
