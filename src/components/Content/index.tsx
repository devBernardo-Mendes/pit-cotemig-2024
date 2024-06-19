import React, { ReactNode } from "react";
import { ContainerSC } from "./styles/styled";

interface IProps {
  children?: ReactNode;
}

const Content: React.FC<IProps> = ({ children }) => {
  return <ContainerSC>{children}</ContainerSC>;
};

export default Content;
