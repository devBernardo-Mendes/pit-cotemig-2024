import React from "react";
import { ContainerSC, FormSC, FormTitleSC, LogoSC } from "./styles/styled";

import logoImg from "../../assets/logo.png";
import Input from "../../components/input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Signin: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmitLogin = () => {
    navigate({
      pathname: "/dashboard",
    });
  };
  return (
    <ContainerSC>
      <LogoSC>
        <img src={logoImg} alt="Condo Smart" />
        <h2>Condo Smart</h2>
      </LogoSC>
      <FormSC onSubmit={handleSubmitLogin}>
        <FormTitleSC>Entrar</FormTitleSC>
        <Input placeholder="E-email" type="email" required />
        <Input placeholder="Senha" type="password" required />

        <Button type="submit">Acessar</Button>
      </FormSC>
    </ContainerSC>
  );
};

export default Signin;
