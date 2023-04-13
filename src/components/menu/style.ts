import styled from "styled-components";

const StyledMenu = styled.section`
  width: 100%;
  height: 70vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-height: 70vh;
    object-fit: contain;
    transition: 1s;

    position: absolute;
    z-index: -1;
  }

  section {
    width: 100%;
    height: 60vh;

    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    position: absolute;
  }

  div {
    width: 100%;
    height: 60%;
    padding: 20px;

    top: -50px;
    transition: 1s;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 16px;

    z-index: 9999;
  }

  div p {
    width: 90%;
    color: var(--grey10);
    transition: 1s;
    text-align: center;
  }

  @media (min-width: 350px) {
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media (min-width: 440px) {
    img {
      width: 80%;
    }
  }
  @media (min-width: 700px) {
    img {
      width: 70%;
    }
  }
  @media (min-width: 900px) {
    img {
      width: 60%;
    }
  }
`;

export default StyledMenu;
