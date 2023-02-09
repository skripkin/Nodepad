import styled, { css } from "styled-components";

export type TFontWeight = 'normal' | 'bold' | 'lighter' | 'bolder';
export type TTextAlign = 'left' | 'center' | 'right' | 'justify';

export const Area = styled.textarea<{
  fontFamily: string;
  fontSize: number;
  fontWeight: TFontWeight;
  lineHeight: number;
  letterSpacing: number;
  textAlign: TTextAlign;
  color: string;
}>`
  padding: 30px;
  max-width: 600px;
  max-height: calc(100vh - 80px);
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.lightBackground};
  border-radius: 1px;
  resize: none;
  ${(props) =>
    props &&
    css`
      font-family: ${props.fontFamily}, sans-serif;
      font-size: ${props.fontSize}px;
      font-weight: ${props.fontWeight};
      line-height: ${props.lineHeight}%;
      letter-spacing: ${props.letterSpacing}px;
      text-align: ${props.textAlign};
      color: ${props.color}
    `}
`;
