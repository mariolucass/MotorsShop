import styled from "styled-components";

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Box = styled.div`
    width: 343px;
    height: 542px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 44px 28px;
    gap: 32px;
    border: 2px solid red
`

export const Title = styled.h2`
    font-weight: 500;
    font-size: 24px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    
    span, a {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-decoration: none;
        color: var(--grey0);
    }

    .forgot_password {
        text-align: end !important;
    }
`

export const Button = styled.button`
    background: var(--brand1);
    padding: 12px 28px;

    width: 286.09px;
    height: 48px;

    border: 1.5px solid var(--brand1);
    border-radius: 4px;
    color: var(--whitefixed);
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 0px;
`

export const Register = styled.button`
    background: var(--whitefixed);
    padding: 12px 28px;

    width: 286.09px;
    height: 48px;

    border: 1.5px solid var(--grey3);
    border-radius: 4px;
    color: var(--grey0);
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 0px;
`