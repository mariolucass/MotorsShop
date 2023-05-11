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
    width: 100%;
    /* min-height: 129px; */
    /* border: 10px solid var(--brand); */
    border-radius: 8px;
  }
`;

export const ButtonDiv = styled(motion.div)`
  display: flex;
  gap: 4px;
  position: relative;
  /* bottom: 25%; */
`;

export const AutoCompleterComment = styled(motion.button)`
  font-family: "Inter";
  color: var(--grey3);
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
  gap: 10px;

  height: 32px;

  background: #e9ecef;
  border-radius: 24px;
`;

export const DivButtonSubmit = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 5%;
  font-weight: 750;

  button {
    font-family: "Lexend";
  }
`;
