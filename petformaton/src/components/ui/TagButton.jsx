import React from "react";
import styled from "styled-components";

const StyledTagButton = styled.button`
margin-left: 3px;
margin-right: 3px;
border: 1px solid #DEE5DB;
cursor: pointer;
font-family: "Noto Sans KR", sans-serif;
font-size: var(--button-font-size, 1rem);
padding: var(--button-padding,8px 10px);
border-radius: var(--button-radius, 30px);
background: var(--button-bg-color, #DEE5DB);
color: var(--button-color, #000000);
font-weight: bolder;
text-align: center;


// &:focus
&:active,
&:hover{
  background: var(--button-hover-bg-color, #B1B69A);
  border: 1px solid #B1B69A;
}

&:disabled {
  cursor: default;
  opacity: 0.5;
  background: var(--button-bg-color, #DEE5DB);
}
`;

function TagButton(props){
    const {title,onClick}=props;
    return <StyledTagButton onClick={onClick}>{title || "button"}</StyledTagButton>
}

export default TagButton;