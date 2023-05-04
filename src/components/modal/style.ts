import styled from "styled-components";

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 520px;
  border-radius: 2px;
  padding: 10px;
  background: var(--whitefixed);

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow-y: auto;
  height: 75vh;

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
  }
`;
