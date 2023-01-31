import styled, { css, keyframes } from "styled-components";

const arrowRotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(180deg); }
`;

export const General = styled.div`
  position: relative;
  width: 100%;
`;
  
export const Container = styled.label<{ isOpened: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #e8ecf0;
  border-radius: ${({ isOpened }) => (isOpened ? "4px 4px 0px 0px" : "4px")};
  cursor: pointer;
`;

export const SelectedTitle = styled.p`
  width: calc(100% - 10px);
  padding-right: 12px;
  font-family: "Fira Sans";
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #2D3A41;
`;

export const OpenPopupButton = styled.button<{ isOpened: boolean }>`
  transform: rotate(0deg);
  ${({ isOpened }) =>
    isOpened &&
    css`
      animation-name: ${arrowRotate};
      animation-duration: 0.2s;
      animation-fill-mode: forwards;
    `}
`;

export const Popup = styled.div<{ isOpened: boolean }>`
  position: absolute;
  top: calc(100% - 1px);
  left: 0;
  right: 0;
  background: #ffffff;
  border: 1px solid #e8ecf0;
  border-top: unset;
  border-radius: ${({ isOpened }) => (isOpened ? "0px 0px 4px 4px" : "4px")};
  z-index: 1;
`;

export const SelectItem = styled.button`
  display: flex;
  width: calc(100% - 16px);
  margin: 0 10px;
  padding: 8px 0;
  border-bottom: 1px solid #e8ecf0;
  font-family: "Fira Sans";
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  cursor: pointer;

  &:first-child {
    border-top: 1px solid #e8ecf0;
  }

  &:last-child {
    border-bottom: unset;
  }

`;

export const ColorImage = styled.div<{ color: string }>`
  min-width: 18px;
  height: 18px;
  margin-right: 12px;
  border-radius: 3px;

  ${({ color }) =>
    color &&
    css`
      background: ${color};
      border: 1px solid ${color};
    `}
`;
