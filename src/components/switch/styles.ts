import styled from "styled-components";

export const CheckBoxWrapper = styled.div`
  position: relative;
  margin-left: auto;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 20px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 13.5px;
    height: 13.5px;
    margin: 3px;
    background: ${({ theme }) => theme.colors.lightMainColor};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 20px;
  &:checked + ${CheckBoxLabel} {
    background: ${({ theme }) => theme.colors.successColor};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 13.5px;
      height: 13.5px;
      margin-left: 25px;
      transition: 0.2s;
    }
  }
`;
