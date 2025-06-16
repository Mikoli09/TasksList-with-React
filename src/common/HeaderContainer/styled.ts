import styled from "styled-components";

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

