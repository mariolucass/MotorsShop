import styled from "styled-components";

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

  /* @media (max-width: 1100px) {
    margin-top: 0px;
  } */

  /* @media (min-height: 700px) {
    margin-top: calc(40vh - 120px);
  }

  @media (min-height: 900px) {
    margin-top: calc(20vh - 100px);
  } */
`;


export const Container = styled.section`
    width: 100%;
    height: 100%;
    /* padding: 16px 24px; */
    
    #title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: var(--grey1);
    }
    
    svg {
        cursor: pointer;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 14px;

    textarea {
        border: 1px solid var(--grey4);
        padding: 15px 10px;
        border-radius: 5px;
        margin: 8px 0 15px;
        resize: none;

        font-size: 16px;
        
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        line-height: 17px;
        text-decoration: none;
        color: var(--grey3);
        
        :focus {
            outline: 1px solid var(--brand1);
        }

        ::placeholder {
            font-size: 16px;
            
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            line-height: 17px;
            text-decoration: none;
            color: var(--grey3);
        }
    }

    input {
        width: 93%;
    }

`

export const DivisionTypes = styled.section`
        display: flex;
        justify-content: space-between;
        margin: 16px 0 24px;

        div {
            display: flex;
            flex-direction: column ;
            width: 47%;
        }

        .radio {
            position: relative;
            
            input {
                position: absolute;
                opacity: 0;
                user-select: none;
            }

            span {
                padding: 12px 28px;
                border: 1.5px solid var(--grey4);
                border-radius: 4px;
                color: var(--grey0);
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
            
                cursor: pointer;

                width: 50%;
            }

            input:checked ~ span {
                background: var(--brand1);
                border: 1.5px solid var(--brand1);
                color: var(--whitefixed);
                transition: 0.3s;
            }
        }
    
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    #cancel {
        background-color: var(--grey6);
        color: var(--grey2);
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        text-transform: capitalize;
    }

    #delete {
        background-color: var(--alert2);
        color: var(--alert1);
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        text-transform: capitalize;
    }    
    
    #update {
        background-color: var(--brand1);
        color: var(--whitefixed);
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        text-transform: capitalize;
    }
`

export const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;

    input {
        width: 85%;
    }
`