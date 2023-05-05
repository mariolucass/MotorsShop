import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 1000px;

    display: flex;
    justify-content: center;
    align-items: center;

`

export const Box = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    width: 40%;

    h2 {
        font-weight: 700;
        font-size: 28px;
        text-align: center;
        color: var(--brand1);
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: var(--grey3);
    }
    
    img {
        width: 90%;
    }

    @media screen and (max-width: 700px) {
        gap: 10px;
        width: 65%;

        h2 {
        font-weight: 700;
        font-size: 24px;
        text-align: center;
        }

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 14px;
        }
    }

    @media screen and (min-width: 700px) and (max-width: 1200px){
        gap: 10px;
        width: 65%;

        h2 {
        font-weight: 700;
        font-size: 22px;
        text-align: center;
        }

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 14px;
        }
    }
`