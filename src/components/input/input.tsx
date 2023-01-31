import React from "react";
import { Container, DefaultInput, IconBox, UnitOfMeasurement } from "./styles";

interface IInputProp {
  value: string | number;
  onChange: (value: string | number) => void;
  icon?: React.ReactNode;
  unit?: string;
  className?: string;
}

const Input = ({ value, onChange, icon, unit, className = "" }: IInputProp) => {
  return (
    <Container className={className}>
      {icon && <IconBox>{icon}</IconBox>}
      <DefaultInput
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {unit && <UnitOfMeasurement>{unit}</UnitOfMeasurement>}
    </Container>
  );
};

export default Input;
