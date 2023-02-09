import React from "react";
import { Sidebar, Textarea } from "./components";
import useSettings from "./hooks/useSettings";
import { Container, LeftBox, RightBox } from "./styles";
import { LightTheme, DarkTheme } from "./theme";
import { ThemeProvider } from "styled-components";

const themeName = {
  lightTheme: LightTheme,
  darkTheme: DarkTheme,
};

const App = () => {
  const { text, settings, defaultTheme, handleSetText, addSettings, handleSetDefaultTheme } = useSettings();

  return (
    <ThemeProvider theme={themeName[defaultTheme as keyof typeof themeName]}>
      <Container>
        <LeftBox>
          <Textarea
            value={text}
            onChange={handleSetText}
            fontFamily={settings.fontFamily}
            fonrSize={settings.fontSize}
            fontWeight={settings.fontWeight}
            lineHeight={settings.lineHeight}
            letterSpacing={settings.letterSpacing}
            color={settings.color}
            textAlign={settings.textAlign}
          />
        </LeftBox>
        <RightBox>
          <Sidebar
            title="Text"
            theme={defaultTheme}
            onSettingSave={(items) => addSettings(items)}
            onThemeChange={handleSetDefaultTheme}
            settings={{ ...settings }}
          />
        </RightBox>
      </Container>
    </ThemeProvider>
  );
};

export default App;
