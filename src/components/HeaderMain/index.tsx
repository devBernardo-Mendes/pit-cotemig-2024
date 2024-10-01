import React from "react";
import {
  ContainerSC,
  WelcomeSC,
  ProfileSC,
  UserNameSC,
  TitleSC,
} from "./styles/styled";

const MainHeader: React.FC = () => {
  const data = { name: "Bernardo Reis!" };
  return (
    <ContainerSC>
      <TitleSC>Condo Smart</TitleSC>

      <ProfileSC>
        <WelcomeSC>Olá, </WelcomeSC>
        <UserNameSC>{data.name}</UserNameSC>
      </ProfileSC>
    </ContainerSC>
  );
};

export default MainHeader;
