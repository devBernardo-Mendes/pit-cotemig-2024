import React, { ButtonHTMLAttributes } from "react";
import { ContainerSC } from "./styles/styled";

type IButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButtonPropsType> = ({ children, ...rest }) => {
  return <ContainerSC {...rest}>{children}</ContainerSC>;
};

export default Button;
