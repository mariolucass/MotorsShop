import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 289px;
  /* padding: 2em; */
  gap: 1em;
  width: 100%;

  .user {
    display: flex;
    align-items: center;
    gap: 6px;

    h3 {
      font-family: "Inter";
      font-weight: 500;
    }
  }

  .textArea {
    font-family: "Inter";
    width: 95%;
    min-height: 129px;
    /* border: 10px solid var(--brand); */
    border-radius: 8px;
    padding: 1em;
  }
`;

export const ButtonSubmit = styled(motion.button)`
  box-sizing: border-box;
  position: relative;
  bottom: 30%;
  left: 80%;
  width: 112px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 10px;

  color: var(--whitefixed);

  background: #4529e6;

  border: 1.5px solid #4529e6;
  border-radius: 4px;
`;

export const ButtonDiv = styled(motion.div)`
  display: flex;
  gap: 4px;
  position: relative;
  bottom: 25%;
`;

export const AutoCompletes = styled(motion.button)`
  font-family: "Inter";
  color: var(--grey3);
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
  gap: 10px;

  height: 24px;

  background: #e9ecef;
  border-radius: 24px;
`;
