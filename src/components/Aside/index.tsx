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
import {
  MdArrowDownward,
  MdArrowUpward,
  MdDashboard,
  MdExitToApp,
} from "react-icons/md";
import useLogin from "../../pages/Signin/hooks/useGetLogin";

const Aside: React.FC = () => {
  const { logout } = useLogin();
  return (
    <ContainerSC>
      <HeaderSC>
        <LogImgSC src={logoImg} alt="Logo CondoSmart" />
        <TitleSC>Condo Smart</TitleSC>
      </HeaderSC>

      <MenuContainerSC>
        <MenuIntemLinkSC href="/condosmart">
          <MdDashboard />
          Dashboard
        </MenuIntemLinkSC>
        <MenuIntemLinkSC href="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </MenuIntemLinkSC>

        <MenuIntemLinkSC href="/list/exit-balance">
          <MdArrowDownward />
          Saídas
        </MenuIntemLinkSC>
        <MenuIntemLinkSC href="/login" onClick={logout}>
          <MdExitToApp />
          Sair
        </MenuIntemLinkSC>
      </MenuContainerSC>
    </ContainerSC>
  );
};

export default Aside;
