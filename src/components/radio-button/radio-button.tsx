import React from "react";
import { Container, Icon, Radio } from "./styles";

interface IRadioProps {
  id: string;
  name: string;
  active: boolean;
  onChange: () => void;
  icon: React.ReactNode;
}

const RadioButton = ({ id, name, active, onChange, icon }: IRadioProps) => {
  return (
    <Container>
      <Radio type="radio" name={name} checked={active} onChange={onChange} />
      <Icon>
        {icon}
      </Icon>
    </Container>
  );
};

export default RadioButton;
