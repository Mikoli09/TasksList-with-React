import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    gap: 10px;
    padding: 15px;

    @media (max-width: 767px) {
        flex-direction: column;
        flex-wrap: wrap;
    }
`;

export const InsertTaskButton = styled.button`
    background-color: teal;
    font-size: 18px;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.02);
    }
`;