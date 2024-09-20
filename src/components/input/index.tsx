import React, { InputHTMLAttributes } from "react";
import { ContainerSC } from "./styles/styled";

type InputPropsType = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputPropsType> = ({ ...rest }) => {
  return <ContainerSC {...rest}></ContainerSC>;
};

export default Input;
