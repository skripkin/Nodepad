import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  align-items: center;
  padding: 9px 10px;
  background: ${({ theme }) => theme.colors.darkenLightBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;

  & > input[type="number"] {
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
    appearance: textfield;
  }
  
  & > input[type="number"]::-webkit-outer-spin-button,
  & > input[type="number"]::-webkit-inner-spin-button {
    display: none;
  }
`;

export const DefaultInput = styled.input`
  margin: 0 12px;
  width: 100%;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.mainColor};
`;

export const IconBox = styled.div`
  display: inherit;
  width: 16px;
  height: 16px;
`;

export const UnitOfMeasurement = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  color: ${({ theme }) => theme.colors.secondary};
`;
