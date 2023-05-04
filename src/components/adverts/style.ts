import styled, { css } from "styled-components";
import { iAdvertsProps } from "../../interfaces";
import { motion } from "framer-motion";

export const ListStyled = styled(motion.ul)<iAdvertsProps>`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  max-width: 1500px;
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
