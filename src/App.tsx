import React from "react";
import { Sidebar, Textarea } from "./components";
import {
  ALIGN_BUTTONS,
  SELECT_COLOR_ITEMS,
  SELECT_FONTWEIGHT,
  SELECT_ITEMS,
} from "./components/sidebar/mock";
import { getCookie, setCookie } from "./hooks/useCookie";
import { Container, LeftBox, RightBox } from "./styles";

const defaultSettings = {
  fontFamily: SELECT_ITEMS[0].value,
  fontWeight: SELECT_FONTWEIGHT[0].value,
  fontSize: 14,
  lineHeight: 14,
  letterSpacing: 0.5,
  color: SELECT_COLOR_ITEMS[0].value,
  textAlign: ALIGN_BUTTONS[0].id,
};

const App = () => {
  const [text, setText] = React.useState("some text");
  const [settings, setSettings] = React.useState(
    getCookie("settings") || defaultSettings
  );

  const addSettings = (value: object) => {
    setCookie("settings", value, 7);
    setSettings(value);
  };

  React.useEffect(() => {
    const cookieSettings = getCookie("settings") ?? defaultSettings;
    setSettings(cookieSettings);
  }, []);

  return (
    <Container>
      <LeftBox>
        <Textarea
          value={text}
          onChange={setText}
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
          onSettingSave={(items) => addSettings(items)}
          settings={{ ...settings }}
        />
      </RightBox>
    </Container>
  );
};

export default App;
