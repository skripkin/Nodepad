import styled from "styled-components";
import Input from "../input/input";
import Select from "../select/select";

export const Container = styled.div``;

export const SidebarTitle = styled.p`
  font-family: 'Fira Sans';
  font-weight: 600;
  font-size: 11px;
  line-height: 20px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.mainColor};
`;

export const ValuesBox = styled.div`
  display: flex;
  margin: 10px 0;
`;

export const FontWeightSelect = styled(Select)`
  border-radius: 4px 0px 0px 4px;
`;

export const FontWeightInput = styled(Input)`
  width: 50%;
  border-left: unset;
  border-radius: 0px 4px 4px 0px;
`;

export const LineHeightInput = styled(Input)`
  width: 50%;
  border-radius: 4px 0px 0px 4px;
`;

export const LetterSpacingInput = styled(Input)`
  width: 50%;
  border-left: unset;
  border-radius: 0px 4px 4px 0px;
`;

export const AplyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px 12px;
  background: ${({ theme }) => theme.colors.successColor};
  border-radius: 4px;
`;

export const ButtonTitle = styled.p`
  font-family: 'Fira Sans';
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.lightMainColor};
  text-align: center;
`;