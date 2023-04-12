import styled from "styled-components"

interface IContainerProps {
    isClosed: boolean
}

export const Container = styled.section<IContainerProps>`
    display: ${props => props.isClosed ? "none" : "flex"};
    flex-direction: column;
    z-index: 9999;
    width: 100vw;
    background-color: var(--whitefixed);
    padding: 0 15px 15px 15px;

    @media screen and (min-width: 720px) {
        width: 23%;
    }
`

export const TitleNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    height: 56px;
`

export const TitlesFilter = styled.h3`
    font-size: 28px;
    font-weight: 600;
    line-height: 35px;
`

export const ListElements = styled.ul`
    padding: 15px;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    list-style: none;
    color: var(--grey3);

    li {
        width: fit-content;
        cursor: pointer;
    }
`

export const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

export const Input = styled.input`
    padding: 10px 8px;
    width: 30%;
    background: var(--grey5);
    border: none;
    border-radius: 1px;
    font-size: 16px;
    color: var(--grey3);
    outline: none;
    `

export const Button = styled.button`
    background: var(--brand2);
    border: none;
    width: 70%;
    padding: 25px 0;
    border-radius: 5px;
    cursor: pointer;
    color: var(--whitefixed);
    font-weight: 600;
    font-size: 16px;
    line-height: 0px;
`