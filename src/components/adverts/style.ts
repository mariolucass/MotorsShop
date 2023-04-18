import styled from "styled-components";

export const ListStyled = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 560px;
  overflow-x: auto;

  @media (min-width: 700px) {
    height: 100%;
    flex-direction: row;
  }
`;
