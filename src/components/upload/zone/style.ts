import styled, { css } from "styled-components";

interface iDropContainerProps {
  isDragActive: boolean;
  isDragReject: boolean;
}

export const DropContainer = styled.div<iDropContainerProps>`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${({ isDragActive, isDragReject }) => {
    if (isDragActive) {
      return css`
        border-color: var(--sucess1);
      `;
    }
    if (isDragReject) {
      return css`
        border-color: var(--alert1);
      `;
    }
  }}
`;

interface iUploadMessageProps {
  type?: "error" | "sucess";
}

export const UploadMessage = styled.p<iUploadMessageProps>`
  display: flex;
  ${({ type }) => {
    switch (type) {
      case "error":
        return css`
          color: var(--alert1);
        `;
      case "sucess":
        return css`
          color: var(--sucess1);
        `;
      default:
        return css`
          color: var(--grey4);
        `;
    }
  }}
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;
