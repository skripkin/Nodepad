import { DefaultTheme } from "styled-components";
import { ThemeEnum } from "./theme";

const lightTheme: DefaultTheme = {
  type: ThemeEnum.light,
  colors: {
    mainColor: "#2D3A41",
    lightMainColor: "#FFFFFF",
    secondary: "#AAB2BB",

    primary: "#2198ED",
    successColor: "#4CAF50",
    
    mainBackground: "#F4F4F4",
    lightBackground: "#FFFFFF",
    darkenLightBackground: "#FFFFFF",
    border: "#E8ECF0",
  },
  opacity: 0.5,
};

export default lightTheme