import React from "react";
import styled from "styled-components";
import { appColors } from "../variables";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  border-radius: 3px;
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px #0000000b;
  display: inline-block;
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 7px"
      : props.size === "medium"
      ? "9px 30px 9px"
      : "14px 30px 14px"};
  color: ${(props) => (props.primary ? appColors.white : appColors.secondary)};
  background-color: ${(props) => (props.primary ? appColors.primary : appColors.white)};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.primary ? appColors.primary : appColors.secondary)} ;
  &:hover {
    background-color: ${(props) => (props.primary ? appColors.primaryHover : appColors.white)};
    border-color: ${(props) => (props.primary ? appColors.primaryHover : appColors.primary)};
    color: ${(props) => (props.primary ? appColors.white : appColors.primary)}
  }
  transition: 0.4s ease;
  &:active {
    border: solid 2px ${appColors.primaryHover};
  }

  .button-text {

  }
`;

const Button: React.FC<ButtonProps> = ({ text, primary, disabled, size, onClick, ...props }) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    > 
      <span className="button-text">{text}</span>
    </StyledButton>
  );
};

export default Button;
