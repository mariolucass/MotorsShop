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

  @media (max-width: 1024px) {
    max-width: 100vw;
  }
`;
