import styled from "styled-components";

export const MainStyled = styled.main`
  height: 100%;
  min-width: 100%;

  section {
    width: 100%;
  }
`;

export const AdvertsMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (min-width: 700px) {
    gap: 10px;
  }

  @media (min-width: 900px) {
    gap: 25px;
  }

  @media (min-width: 1200px) {
    gap: 50px;
  }
`;
