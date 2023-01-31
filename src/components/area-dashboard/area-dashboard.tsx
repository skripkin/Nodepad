import React from "react";
import { Area, TFontWeight, TTextAlign } from "./styles";

interface IAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  fontFamily: string;
  fonrSize: number;
  fontWeight: TFontWeight;
  lineHeight: number;
  letterSpacing: number;
  textAlign: TTextAlign;
  color: string;
}

const Textarea = (props: IAreaProps) => {
  return (
    <Area
      value={props.value}
      placeholder={props.placeholder}
      fontFamily={props.fontFamily}
      fontSize={props.fonrSize}
      fontWeight={props.fontWeight}
      lineHeight={props.lineHeight}
      letterSpacing={props.letterSpacing}
      textAlign={props.textAlign}
      color={props.color}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};

export default Textarea;
