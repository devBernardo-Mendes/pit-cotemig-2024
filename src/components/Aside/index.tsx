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
  MdAnnouncement,
  MdArrowDownward,
  MdArrowUpward,
  MdBuild,
  MdDashboard,
  MdEventAvailable,
  MdExitToApp,
  MdGroups,
  MdPeople,
  MdReportProblem,
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

        <MenuIntemLinkSC href="/residents-registration">
          <MdPeople />
          Cadastro de Moradores
        </MenuIntemLinkSC>

        <MenuIntemLinkSC href="/common-area-reservation">
          <MdEventAvailable />
          Reserva de Área Comum
        </MenuIntemLinkSC>

        <MenuIntemLinkSC href="/complaints">
          <MdReportProblem />
          Painel de Reclamações
        </MenuIntemLinkSC>

        <MenuIntemLinkSC href="/service-requests">
          <MdBuild />
          Solicitações de Ordem de Serviço
        </MenuIntemLinkSC>

        <MenuIntemLinkSC href="/assembly">
          <MdGroups />
          Assembleia
        </MenuIntemLinkSC>

        <MenuIntemLinkSC href="/notice-board">
          <MdAnnouncement />
          Mural de Avisos
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
