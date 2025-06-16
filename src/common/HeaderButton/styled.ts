import styled, {css} from "styled-components";

export const HeaderButton = styled.button<{$notVisible?: boolean}>`
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
        transform: scale(1.02);
    }
`;