import { motion } from "framer-motion";
import styled from "styled-components";

export const ButtonSubmit = styled(motion.button)`
  box-sizing: border-box;
  position: relative;
  bottom: 5%;
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
  cursor: pointer;
`;

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 520px;
  /* height: 80vh; */
  border-radius: 2px;
  background: var(--whitefixed);
  padding: 16px 24px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow-y: auto;

  z-index: 9999;

  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Fundo da barra de rolagem */
  ::-webkit-scrollbar-track-piece {
    border: none;
  }

  /* Cor do indicador de rolagem */
  ::-webkit-scrollbar-thumb:vertical,
  ::-webkit-scrollbar-thumb:horizontal {
    background-color: var(--grey4);
    border-radius: 5px;
  }

  /* Cor do indicador de rolagem - ao passar o mouse */
  ::-webkit-scrollbar-thumb:vertical:hover,
  ::-webkit-scrollbar-thumb:horizontal:hover {
    background-color: var(--grey5);
  }

  @media (max-width: 1024px) {
    max-width: 100vw;
    margin-top: calc(40vh - 120px);
  }
`;

export const Container = styled.section`
  width: 100%;

  form {
    height: 30vh;
    display: flex;
    gap: 2em;
    flex-direction: column;
  }

  .user {
    display: flex;
    align-items: center;
    gap: 6px;

    h3 {
      font-family: "Inter";
      font-weight: 500;
      margin-left: 10px;
    }
  }
`;

export const DivButtons = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  button {
    width: 20%;
    /* background-color: var(--brand1); */
  }
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

  height: 24px;

  background: #e9ecef;
  border-radius: 24px;
`;
