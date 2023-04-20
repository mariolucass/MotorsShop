import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #000000;

  @media (max-width: 768px) {
    height: 375px;
    flex-direction: column;
  }

  span {
    color: #ffffff;
    font-family: "Inter";
  }

  button {
    border: 0;

    width: 53px;
    height: 50px;
    background-color: #212529;
    border-radius: 4px;

    text-decoration: none;
    cursor: pointer;

    img {
      width: 10px;
      height: 18px;
      filter: invert(96%) sepia(97%) saturate(12%) hue-rotate(237deg)
        brightness(103%) contrast(103%);
    }
  }
`;
