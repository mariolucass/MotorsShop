import styled, { css } from "styled-components";

interface Props {
  width: string;
}
interface iInputProps {
  type?: string;
}

const fileInput = css`
  display: none;
`;

export const ContainerStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  margin-top: 0.2em;
  margin-bottom: 0.2em;

  @keyframes tremer {
    0% {
      margin-left: 0;
    }
    25% {
      margin-left: 7px;
    }
    50% {
      margin-left: 0;
    }
    75% {
      margin-left: -7px;
    }
    100% {
      margin-left: 0;
    }
  }

  .errorInput {
    border: 2px solid var(--alert1);
    animation: tremer 0.2s;
    animation-iteration-count: 2;
  }

  label,
  input {
    width: ${(p) => (p.width === "100" ? "90%" : "80%")};
  }

  input:focus {
    background: var(--grey9);
    border: 1.5px solid red;
  }
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  gap: 10px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: var(--grey1);
`;

export const InputStyled = styled.input<iInputProps>`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 0px;

  color: var(--grey1);

  position: relative;

  height: 50px;
  padding: 0 1rem;
  border-radius: 8px;
  border: 1.5px solid var(--grey7);
  border-radius: 4px;

  ${({ type }) => type === "file" && fileInput};
`;

export const LabelForInputFile = styled.label`
  width: 97.5%;
  min-height: 50px;
  border: 1.5px solid var(--grey7);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: var(--grey1);
`;
