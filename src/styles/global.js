import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }

    ul , ol {
       list-style: none; 
    }
    img {
        max-width: 100%;
    }

    :root{
        --colorExemple: teal;
    }
`