import React from "react";
import { Icons } from "..";
import useHandleOutsideClick from "../../hooks/useOutsideClick";
import {
  ColorImage,
  Container,
  General,
  OpenPopupButton,
  Popup,
  SelectedTitle,
  SelectItem,
} from "./styles";

type TItem = {
  id: number;
  label: string;
  value: string;
};

interface ISelectProps {
  activeValue: string;
  items: TItem[];
  onSelect: (item: TItem) => void;
  colorPicker?: boolean;
  className?: string;
}

const Select = ({
  activeValue,
  items,
  onSelect,
  colorPicker,
  className = "",
}: ISelectProps) => {
  const [open, setOpen] = React.useState(false);
  const innerRef = React.useRef(null);
  useHandleOutsideClick(innerRef, open, () => setOpen(!open));

  const handleSelected = (item: TItem) => {
    onSelect(item);
    setOpen(false);
  };

  return (
    <General ref={innerRef}>
      <Container isOpened={open} className={className}>
        {colorPicker && <ColorImage color={activeValue} />}
        <SelectedTitle>{activeValue}</SelectedTitle>
        <OpenPopupButton isOpened={open} onClick={() => setOpen(!open)}>
          <Icons.DownArrow color="#AAB2BB" />
        </OpenPopupButton>
      </Container>
      {open && (
        <Popup isOpened={open}>
          {items.map((item, index) => (
            <SelectItem
              key={`${item.value}-${item.id}-${index}`}
              onClick={() => handleSelected(item)}
            >
              {colorPicker && <ColorImage color={item.label} />}
              {item.label}
            </SelectItem>
          ))}
        </Popup>
      )}
    </General>
  );
};

export default Select;
