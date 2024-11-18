import React from "react";

import { ContainerSC, ControllersSC, TitleContainerSC } from "./styles/styled";

interface IProps {
  title: string;
  lineColor: string;
  children?: React.ReactNode;
}

const ContentHeader: React.FC<IProps> = ({ children, lineColor, title }) => {
  return (
    <ContainerSC>
      <TitleContainerSC lineColor={lineColor}>
        <h1>{title}</h1>
      </TitleContainerSC>
      <ControllersSC>{children}</ControllersSC>
    </ContainerSC>
  );
};

export default ContentHeader;
