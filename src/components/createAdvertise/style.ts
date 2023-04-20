import styled from "styled-components";

export const DivStyled = styled.div`
  margin-top: 25px;

  h1 {
    position: absolute;
    top: 3%;
    left: 4.5%;
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
  padding: 1em;
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

  .buttonForms {
    height: 48px;
  }

  @media (max-width: 1024px) {
    justify-content: space-around;
  }

  button:first-child {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;
    gap: 10px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 0px;

    background-color: var(--grey-6);

    border: 1.5px solid var(--grey6);
    border-radius: 4px;

    color: var(--grey2);

    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }

  button:last-child {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;
    gap: 10px;

    background-color: var(--brand3);

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 0px;

    color: var(--brand4);
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
`;

export const InputSplitDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
