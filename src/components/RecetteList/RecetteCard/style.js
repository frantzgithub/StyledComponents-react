import styled, { css } from "styled-components";

export const StyleRecetteCard = styled.li`
    padding: 20px;
    ${({card_style}) => {
        if(card_style === "favorite") {
            return css`
                border: 2px solid red;
                background: white;
            `
        } else if(card_style === "recent"){
            return css`
                border-bottom: 12px solid blue;
                background: gray;
            `
        }
    }}
`