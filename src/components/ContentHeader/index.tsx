import React from "react";

import { ContainerSC, ControllersSC, TitleContainerSC } from "./styles/styled";

const ContentHeader: React.FC = () => {
  return (
    <ContainerSC>
      <TitleContainerSC>
        <h1>Título</h1>
      </TitleContainerSC>
      <ControllersSC>
        <button type="button">Botao A</button>
        <button type="button">Botao B</button>
      </ControllersSC>
    </ContainerSC>
  );
};

export default ContentHeader;
