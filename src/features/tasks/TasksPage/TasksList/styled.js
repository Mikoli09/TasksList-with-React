import styled, { css } from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom";

export const Container = styled.div`
    padding: 10px;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0 auto 0;
    padding-left: 0px;
    list-style: none;
`;

export const Task = styled.li`
    display: flex;
    align-items: center;
    padding: 10px 5px;
    border-bottom: 2px solid;
    border-color: #EEEEEE;

    ${({ $hide }) => $hide && css`
        display: none;
    `}
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    width: 25px;
    height: 25px;
    border: none;
    cursor: pointer;
    flex-shrink: 0;
    color: white;
    transition: 0.5s;

    &:hover {
        background-color: hsl(120, 100%, 30%);
        transform: scale(1.02);
    }

    &:active {
        border: solid;
        border-color: black;
        border-width: 1px;
    }

    ${({ $checkmark }) => $checkmark && css`
        &::before {
            content: "✔";
        }
    `}

    ${({ $remove }) => $remove && css`
        background-color: red;

        &::before {
            content: "🗑";
        }

         &:hover {
             background-color: hsl(0, 100%, 70%);
        }
    `}
`;

export const Content = styled.span`
    text-align: left;
    word-break: break-word;
    margin: 10px 10px;
    flex-grow: 1;
`;

export const TaskLink = styled(Link)`
    text-decoration: none;
    color: black;
    display: inline-block;
    transition: 0.5s;

        &:hover{
            transform: scale(1.02);
        }
        ${({ $lineThrough }) => $lineThrough && css`
            text-decoration: line-through;
        `}
`;
