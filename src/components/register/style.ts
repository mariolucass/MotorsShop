import styled from "styled-components"

export const Container = styled.section`
    width: 100%;

    padding: 40px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--grey8);
`

export const Box = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 44px 28px;
    gap: 32px;
    width: 411px;

    background: var(--grey10);
    border-radius: 4px;

    #finished_register {
        width: 100%;
        height: 48px;
        margin-top: 10px;

        background:  var(--brand1);

        border: 1.5px solid var(--brand1);
        border-radius: 4px;
    }

    label, span, a {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-decoration: none;
        color: var(--grey2);
    }

    #alert {
        margin-bottom: 10px;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
    }

    #toggle {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        gap: 5px;
        width: 100%;
        margin-bottom: 10px;

        button {
            border-radius: 4px;
            border: 1px solid black;
            width: 47%;

            /* background: var(--whitefixed); */
            padding: 12px 28px;

            width: 286.09px;
            height: 48px;

            border: 1.5px solid var(--grey3);
            border-radius: 4px;
            color: var(--grey0);
        }
    }

`

export const Title = styled.h2`
    font-weight: 500;
    font-size: 24px;
`

export const SubTitle = styled.h3`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    padding: 5px 0 10px 0;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    input {
        border: 1px solid var(--grey4);
        padding: 15px 10px;
        border-radius: 5px;
        margin: 8px 0 15px;

        :focus {
            outline: 1px solid var(--brand1);
        }
    }

    input[placeholder] {
        font-size: 16px;
        color: var(--grey2);
    }

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
    
    .division_types {
        margin: 20px 0 30px;
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

export const Division = styled.div`
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column ;
        width: 47%;
    }
`