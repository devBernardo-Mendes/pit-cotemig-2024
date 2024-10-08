import React from "react";
import { ContainerSC } from "./styles/styled";

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string | number;
}

const SelectedInput: React.FC<ISelectInputProps> = ({
  options,
  onChange,
  defaultValue,
}) => (
  <ContainerSC>
    <select onChange={onChange} defaultValue={defaultValue}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </ContainerSC>
);

export default SelectedInput;
