import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  align-items: center;
  padding: 9px 10px;
  background: #ffffff;
  border: 1px solid #e8ecf0;
  border-radius: 4px;
`;

export const DefaultInput = styled.input`
  margin: 0 12px;
  width: 100%;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #333333;
`;

export const IconBox = styled.div`
  display: inherit;
  width: 16px;
  height: 16px;
`;

export const UnitOfMeasurement = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  color: #AAB2BB;
`;