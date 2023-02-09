import React, { SetStateAction } from "react";
import { TTextAlign } from "../area-dashboard/styles";
import Icons from "../icons";
import RadioButton from "../radio-button";
import Select from "../select";
import Switch from "../switch";
import {
  SELECT_FONTWEIGHT,
  SELECT_ITEMS,
  SELECT_COLOR_ITEMS,
  ALIGN_BUTTONS,
} from "../../mock";
import {
  AplyButton,
  ButtonTitle,
  Container,
  FontWeightInput,
  FontWeightSelect,
  LetterSpacingInput,
  LineHeightInput,
  SidebarTitle,
  ValuesBox,
} from "./styles";

type TSettings = {
  fontFamily: string;
  fontWeight: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  color: string;
  textAlign: TTextAlign;
};

interface ISidebarProps {
  title: string;
  settings: TSettings;
  theme: string;
  onThemeChange: (themeName: string) => void;
  onSettingSave: (settings: TSettings) => void;
}

const Sidebar = ({ title, settings, theme, onThemeChange, onSettingSave }: ISidebarProps) => {
  const defaultSelectedFontFamily = SELECT_ITEMS.filter(
    (item) => item.value === settings.fontFamily
  )[0];
  const defaultSelectedFontWeight = SELECT_FONTWEIGHT.filter(
    (item) => item.value === settings.fontWeight
  )[0];
  const defaultSelectedColor = SELECT_COLOR_ITEMS.filter(
    (item) => item.value === settings.color
  )[0];

  const [fontFamilyName, setFontFamilyName] = React.useState(
    defaultSelectedFontFamily
  );
  const [fontWeightName, setFontWeightName] = React.useState(
    defaultSelectedFontWeight
  );
  const [fontSizeValue, setFontSizeValue] = React.useState(settings.fontSize);
  const [colorSelect, setColorSelect] = React.useState(defaultSelectedColor);
  const [lineHeightValue, setLineHeightValue] = React.useState(
    settings.lineHeight
  );
  const [letterSpacing, setLetterSpacing] = React.useState(
    settings.letterSpacing
  );
  const [activeAlign, setActiveAlign] = React.useState(
    settings.textAlign as TTextAlign
  );

  const handleSave = () => {
    const settings = {
      fontFamily: fontFamilyName.value,
      fontWeight: fontWeightName.value,
      fontSize: fontSizeValue,
      lineHeight: lineHeightValue,
      letterSpacing: letterSpacing,
      color: colorSelect.value,
      textAlign: activeAlign,
    };

    onSettingSave(settings);
  };

  return (
    <Container>
      <ValuesBox>
        <SidebarTitle>{title}</SidebarTitle>
        <Switch theme={theme} onThemeChange={onThemeChange} />
      </ValuesBox>
      <ValuesBox>
        <Select
          activeValue={fontFamilyName.label}
          items={SELECT_ITEMS}
          onSelect={setFontFamilyName}
        />
      </ValuesBox>
      <ValuesBox>
        <FontWeightSelect
          activeValue={fontWeightName.label}
          items={SELECT_FONTWEIGHT}
          onSelect={setFontWeightName}
        />
        <FontWeightInput
          value={fontSizeValue}
          onChange={(e) => setFontSizeValue(e as SetStateAction<number>)}
          icon={<Icons.FontSizeIcon />}
        />
      </ValuesBox>
      <ValuesBox>
        <Select
          activeValue={colorSelect.label}
          items={SELECT_COLOR_ITEMS}
          onSelect={setColorSelect}
          colorPicker
        />
      </ValuesBox>
      <ValuesBox>
        <LineHeightInput
          value={lineHeightValue}
          onChange={(e) => setLineHeightValue(e as SetStateAction<number>)}
          icon={<Icons.LineHeightIcon />}
          unit="%"
        />
        <LetterSpacingInput
          value={letterSpacing}
          onChange={(e) => setLetterSpacing(e as SetStateAction<number>)}
          icon={<Icons.LetterSpacingIcon />}
          unit="px"
        />
      </ValuesBox>
      <ValuesBox>
        {ALIGN_BUTTONS.map((item, index) => (
          <RadioButton
            key={`${item.id}-${index}`}
            id={item.id}
            name="Align-Radio"
            active={activeAlign === item.id}
            onChange={() => setActiveAlign(item.id as TTextAlign)}
            icon={<item.icon />}
          />
        ))}
      </ValuesBox>
      <AplyButton>
        <ButtonTitle onClick={handleSave}>Apply Changes</ButtonTitle>
      </AplyButton>
    </Container>
  );
};

export default Sidebar;
