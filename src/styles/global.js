import styled from "styled-components";

export const BasicDiv = styled.div`
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
