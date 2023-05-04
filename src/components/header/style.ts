import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  font-family: "Inter";
  top: 0px;
  width: 100%;
  height: 80px;
  display: flex;
  background-color: #ffffff;

  justify-content: space-between;
  align-items: center;
  padding: 0px 60px;
  border-bottom: 2px solid var(--grey6);

  .div__user {
    height: 100%;
    border-left: 2px solid var(--grey6);
    padding-left: 2em;
    display: flex;
    align-items: center;
    gap: 1em;
    flex-direction: row;

    cursor: pointer;
  }

  .div__buttons {
    height: 100%;
    padding-left: 2em;
    display: flex;
    gap: 2rem;
    align-items: center;
    border-left: 2px solid var(--grey6);

    a {
      color: var(--grey2);
      text-decoration: none;

      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;

      :last-child {
        color: var(--grey0);
        font-weight: 600;
        padding: 6px 24px;
        border: solid 1px var(--grey1);
        border-radius: 4px;
      }
    }
  }
`;

export const HomeButton = styled(motion.div)``;
