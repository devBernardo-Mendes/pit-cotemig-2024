import React from "react";
import {
  ContainerSC,
  WelcomeSC,
  ProfileSC,
  UserNameSC,
  TitleSC,
} from "./styles/styled";

const MainHeader: React.FC = () => {
  return (
    <ContainerSC>
      <TitleSC>CondoSmart</TitleSC>

      <ProfileSC>
        <WelcomeSC>Olá, </WelcomeSC>
        <UserNameSC>Bernardo Reis!</UserNameSC>
      </ProfileSC>
    </ContainerSC>
  );
};

export default MainHeader;
