import React, { ReactNode } from "react";
import { ContainerSC } from "./styles/styled";
import MainHeader from "../HeaderMain";
import Content from "../Content";
import Aside from "../Aside";

interface IProps {
  children?: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <ContainerSC>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </ContainerSC>
  );
};

export default Layout;
