import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;

    @media (max-width:767px) {
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px
    }
`;

export const HeaderSpan = styled.span`
    flex-grow: 1;
    text-align: left;
`;

export const HeaderButton = styled.button`
    font-size: 18px;
    color: teal;
    border: none;
    background-color: white;
    transition: 0.5s;

    ${({$notVisible}) => $notVisible && css`
        display: none;
    `}

    &:disabled {
        color: gray;
        cursor: auto;
    }

    &:not([disabled]):hover {
        cursor: pointer;
        color: hsl(180, 100%, 35%);
    }
`;