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
        width: 286.09px;
        height: 48px;

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

`

export const Title = styled.h2`
    font-weight: 500;
    font-size: 24px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    input {
        border: 1px solid var(--grey4);
        padding: 15px 10px;
        border-radius: 5px;
        margin: 8px 0 15px;
    }

    input:focus {

        outline: 1px solid var(--brand1);
    }

    input[placeholder] {
        font-size: 16px;
        color: var(--grey2);
    }
`