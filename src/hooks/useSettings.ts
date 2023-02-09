import { useState, useEffect } from "react";
import { getCookie, setCookie } from "./useCookie";
import {
  ALIGN_BUTTONS,
  SELECT_COLOR_ITEMS,
  SELECT_FONTWEIGHT,
  SELECT_ITEMS,
} from "../mock";

const defaultSettings = {
  fontFamily: SELECT_ITEMS[0].value,
  fontWeight: SELECT_FONTWEIGHT[0].value,
  fontSize: 14,
  lineHeight: 14,
  letterSpacing: 0.5,
  color: SELECT_COLOR_ITEMS[0].value,
  textAlign: ALIGN_BUTTONS[0].id,
};

const useSettings = () => {
  const defaultTextState = getCookie("areaText") || "Write your text here...";
  const defaultSettingsState = getCookie("settings") || defaultSettings;
  const defaultThemeName = getCookie("themeName") || "darkTheme";

  const [text, setText] = useState(defaultTextState);
  const [settings, setSettings] = useState(defaultSettingsState);
  const [defaultTheme, setDefaultTheme] = useState(defaultThemeName);
  
  const handleSetText = (value: string) => {
    setText(value);
  };
  
  const addSettings = (value: object) => {
    setCookie("settings", value, 7);
    setCookie("areaText", text, 7);
    setSettings(value);
  };

  const handleSetDefaultTheme = (value: string) => {
    const themeValue = value === "lightTheme" ? "darkTheme" : "lightTheme";
    setCookie("themeName", themeValue, 7);
    setDefaultTheme(themeValue);
  }
  
  useEffect(() => {
    const cookieText = getCookie("areaText") ?? "Write your text here...";
    const cookieSettings = getCookie("settings") ?? defaultSettings;
    setSettings(cookieSettings);
    setText(cookieText);
  }, []);
  
  useEffect(() => {
    const cookieTheme = getCookie("themeName") ?? "darkTheme";
    setDefaultTheme(cookieTheme);
  }, [defaultTheme, defaultThemeName]);

  return {
    text,
    settings,
    defaultTheme,
    handleSetText,
    addSettings,
    handleSetDefaultTheme,
  };
};

export default useSettings;
