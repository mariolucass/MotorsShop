import styled, { css } from "styled-components";
import { iAdvertsProps } from ".";

export const ListStyled = styled.ul<iAdvertsProps>`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 480px;
  overflow-x: auto;

  ${({ isProfile }) => {
    if (isProfile) {
      return css`
        justify-content: center;
      `;
    }
  }}

  @media (min-width: 700px) {
    height: 100%;
    flex-direction: row;
    margin-bottom: 20px;
  }
`;
