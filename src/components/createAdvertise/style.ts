import styled from "styled-components";

export const DivStyled = styled.div`
  overflow-y: auto;
  height: 100%;
  padding: 1em;

  button {
    height: 48px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 0px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;

    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }

  h1 {
    position: relative;
    top: -10px;
    left: 0px;
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  .button_as_input {
    margin-top: 10px;
    width: 97.5%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 0px;
    background-color: transparent;

    color: var(--grey1);

    position: relative;

    height: 50px;
    padding: 0 1rem;

    padding: 0px;
    border-radius: 8px;
    border-radius: 4px;

    :hover {
      background-color: transparent;
    }
  }

  .buttonImage {
    height: 38px;
    padding: 12px 20px;
    background: #edeafd;
    border: 1.5px solid #edeafd;
    color: var(--brand1);

    @media (max-width: 1024px) {
      font-size: 10px;
    }
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-top: 15px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 1em;
  margin-top: 1em;

  button:first-child {
    padding: 12px 28px;
    background-color: var(--grey-6);
    border: 1.5px solid var(--grey6);
    color: var(--grey2);
  }

  button:last-child {
    padding: 12px 28px;
    background-color: var(--brand2);
    color: var(--brand4);
  }

  @media (max-width: 1024px) {
    justify-content: space-around;
  }
`;

export const InputSplitDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivButtonsImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  align-items: flex-end;
`;

export const DivFieldImages = styled.div`
  width: 100%;
  min-height: 100px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .image_fields {
    width: 75%;
  }
`;
