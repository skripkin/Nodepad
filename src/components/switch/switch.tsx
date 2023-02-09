import React from "react";
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from "./styles";

interface IProp { 
  theme: string;
  onThemeChange: (themeName: string) => void;
}

const Switch = ({ theme, onThemeChange }: IProp) => {
  return (
    <CheckBoxWrapper>
      <CheckBox
        id="checkbox"
        type="checkbox"
        checked={theme === "lightTheme"}
        onChange={() => onThemeChange(theme)}
      />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};

export default Switch;
