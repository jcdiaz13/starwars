import styled from "styled-components";

export const StyledContainer = styled.div`
display:grid;
grid-template-columns: 25% 25% 25% 25%;
max-width: 1080px;
margin: auto;
column-gap: 5px;
`;

export const StyledTitle = styled.h1`
justify-content: center;
`

export const Box = styled.div`
    width: 100%;
    text-decoration: none;
    color: black;
    display:black;
     img{
         width :100%;
     }
     p{
         margin: 5px auto 5px auto;
         text-align:center;
     }
`;