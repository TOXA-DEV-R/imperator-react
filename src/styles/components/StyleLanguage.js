import styled from "styled-components";

export const StyleLanguage = styled.div`
  background-color: #0d0d0d;
  .language {
    &__btns {
      padding: 13px 0;
    }
    &__btn {
      font-weight: bold;
      font-size: 10px;
      line-height: 14px;
      letter-spacing: 1.5px;
      color: rgba(255, 255, 255, 0.3);
      cursor: pointer;
      &:first-of-type {
        margin-right: 8px;
      }
      &.active {
        color: #fff;
      }
    }
  }
`;
