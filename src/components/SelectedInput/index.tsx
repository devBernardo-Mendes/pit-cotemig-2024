import React from "react";
import { ContainerSC } from "./styles/styled";

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
}

const SelectedInput: React.FC<ISelectInputProps> = ({ options }) => {
  return (
    <ContainerSC>
      <select>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </ContainerSC>
  );
};

export default SelectedInput;
