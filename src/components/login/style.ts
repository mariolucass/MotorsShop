import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--grey8);
`

export const Box = styled.div`
    width: 343px;
    height: 542px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 44px 28px;
    gap: 32px;

    background: var(--grey10);
    border-radius: 4px;

    #login {
        width: 286.09px;
        height: 48px;

        background:  var(--brand1);

        border: 1.5px solid var(--brand1);
        border-radius: 4px;
    }

    #register {
        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;

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

        transition: 0.3s;

        :hover {
            -webkit-box-shadow: 1px 1px 9px 1px rgba(171,171,171,1);
            -moz-box-shadow: 1px 1px 9px 1px rgba(171,171,171,1);
            box-shadow: 1px 1px 9px 1px rgba(171,171,171,1);

            transition: 0.3s;
        }
    }

    #do_not_account {
        width: 100%;
        text-align: center;
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

`

export const Title = styled.h2`
    font-weight: 500;
    font-size: 24px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    #forgot_password {
        width: 100%;
        text-align: right;
        margin-bottom: 20px;
    }

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