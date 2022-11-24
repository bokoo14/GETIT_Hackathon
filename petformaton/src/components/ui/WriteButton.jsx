import React from "react";
import styled from "styled-components";

const StyledWriteButton = styled.button`
margin: 0px 0px 0px 300px;
border: 1px solid #B1B69A;
cursor: pointer;
font-family: "Noto Sans KR", sans-serif;
font-size: var(--button-font-size, 1rem);
padding: var(--button-padding, 12px 16px);
border-radius: var(--button-radius, 8px);
background: var(--button-bg-color, #DBE2BA);
color: var(--button-color, #000000);
font-weight: bolder;
text-align: center;

&:active,
&:hover,
&:focus {
  background: var(--button-hover-bg-color, #DBE2BA);
}

&:disabled {
  cursor: default;
  opacity: 0.5;
  background: var(--button-bg-color, #DBE2BA);
}
`;

function WriteButton(props){
    const {title,onClick} = props;
    return <StyledWriteButton onClick={onClick}>{title || "button"}</StyledWriteButton>
}

export default WriteButton;