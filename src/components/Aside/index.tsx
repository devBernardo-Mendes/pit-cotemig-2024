import React from "react";
import {
  ContainerSC,
  HeaderSC,
  LogImgSC,
  MenuContainerSC,
  MenuIntemLinkSC,
  TitleSC,
} from "./styles/styled";
import logoImg from "../../assets/logo.png";
import { MdDashboard, MdExitToApp } from "react-icons/md";

const Aside: React.FC = () => {
  return (
    <ContainerSC>
      <HeaderSC>
        <LogImgSC src={logoImg} alt="Logo CondoSmart" />
        <TitleSC>Condo Smart</TitleSC>
      </HeaderSC>

      <MenuContainerSC>
        <MenuIntemLinkSC href="#">
          <MdDashboard />
          Dashboard
        </MenuIntemLinkSC>
        <MenuIntemLinkSC href="#">
          <MdExitToApp />
          Sair
        </MenuIntemLinkSC>
      </MenuContainerSC>
    </ContainerSC>
  );
};

export default Aside;
