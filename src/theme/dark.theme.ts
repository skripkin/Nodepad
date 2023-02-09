import { DefaultTheme } from "styled-components";
import { ThemeEnum } from "./theme";

const darkTheme: DefaultTheme = {
  type: ThemeEnum.dark,
  colors: {
    mainColor: "#bfbfbf",
    lightMainColor: "#E1E1E1",
    secondary: "#AAB2BB",

    primary: "#4CAF50",
    successColor: "#353b40",
    
    mainBackground: "#171c20",
    lightBackground: "#1f2326",
    darkenLightBackground: "#1f2326",
    border: "#393d41",
  },
  opacity: 1,
};

export default darkTheme;