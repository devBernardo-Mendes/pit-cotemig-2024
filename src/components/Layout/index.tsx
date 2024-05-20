import React from "react";
import { ContainerSC } from "./styles/styled";
import MainHeader from "../HeaderMain";
import Content from "../Content";
import Aside from "../Aside";

const Layout: React.FC = () => {
  return (
    <ContainerSC>
      <MainHeader />
      <Aside />
      <Content />
    </ContainerSC>
  );
};

export default Layout;
