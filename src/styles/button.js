import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 46px;
  color: white;
  background: var(--colorExemple);

  &:hover {
    background-color: white;
    color: teal;
    outline: 2px solid teal;
  }
  ${({ button_size }) => {
    switch (button_size) {
      case "lg":
        return css`
          padding: 0 30px;
          height: 52px;
        `;
      case "md":
        return css`
          padding: 0 25px;
          height: 46px;
        `;
      case "sm":
        return css`
          padding: 0 20px;
          height: 40px;
        `;
    }
    /*
        if(buttonSize === "lg"){
          return css`
            padding: 0 30px;
            height: 52px;
          `  
        } else if(buttonSize === "md") {
          return css`
            padding: 0 25px;
            height: 46px;
          `  
        } else if(buttonSize === "sm") {
          return css`
            padding: 0 20px;
            height: 40px;
          `  
        }*/
  }}
`;
