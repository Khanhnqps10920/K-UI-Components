import React from 'react';
import { InputProps } from './Input.types';
import styled from 'styled-components';
import { appColors } from '../variables';

const StyledInput = styled.input<InputProps>`
  /* height: 40px;
  width: 300px;
  border-radius: 3px;
  border: solid 2px
    ${(props) =>
    props.disabled
      ? '#e4e3ea'
      : props.error
      ? '#a9150b'
      : props.success
      ? '#067d68'
      : '#353637'};
  background-color: #fff;
  &:focus {
    border: solid 2px #1b116e;
  } */

  box-sizing: border-box;
  margin: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: #000000d9;
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
  outline: none;
  border-color: ${(props) =>
    props.error
      ? appColors.errorColor
      : props.success
      ? appColors.successColor
      : props.warning
      ? appColors.warningColor
      : appColors.secondary};
  &:focus,
  &:active {
    border-color: ${appColors.primary};
    box-shadow: 0 0 0 2px ${appColors.colorOutline};
    border-right-width: 1px;
    outline: 0;
  }

  &::placeholder {
    color: ${appColors.secondary};
  }
`;

const StyledLabel = styled.div<InputProps>`
  font-size: 14px;
  color: ${(props) => (props.disabled ? '#e4e3ea' : appColors.textColor)};
  padding-bottom: 6px;
`;

const StyledMessage = styled.div<InputProps>`
  font-size: 14px;
  color: ${appColors.secondary};
  padding-top: 4px;
`;

const StyledText = styled.p<InputProps>`
  margin: 0px;
  color: ${(props) =>
    props.disabled
      ? '#e4e3ea'
      : props.error
      ? appColors.errorColor
      : appColors.textColor};
`;

const Input: React.FC<InputProps> = ({
  id,
  label,
  error,
  message,
  success,
  disabled,
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <>
      <StyledLabel>
        <StyledText disabled={disabled} error={error}>
          {label}
        </StyledText>
      </StyledLabel>
      <StyledInput
        id={id}
        type="text"
        onChange={onChange}
        disabled={disabled}
        error={error}
        success={success}
        placeholder={placeholder}
        {...props}
      ></StyledInput>
      <StyledMessage>
        <StyledText error={error}>{message}</StyledText>
      </StyledMessage>
    </>
  );
};

export default Input;
