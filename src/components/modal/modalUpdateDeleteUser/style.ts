import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 70vh;
    padding: 16px 24px;
    /* overflow-y: auto; */

    svg {
        cursor: pointer;
    }

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

    #subtitle {
        margin-top: 16px;
        margin-bottom: 16px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
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
        width: 95%;
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