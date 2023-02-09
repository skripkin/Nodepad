import "styled-components";

export enum ThemeEnum {
  light = "light",
  dark = "dark",
}

export interface ITheme {
  colors: {
    mainColor: string;
    lightMainColor: string;
    secondary: string;

    primary: string;
    successColor: string;

    mainBackground: string;
    lightBackground: string;
    darkenLightBackground: string;
    border: string;
  };
}

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {
    type: ThemeEnum;
    opacity: number;
  }
}
