import React, { useState } from "react";
import { ContainerSC, FormSC, FormTitleSC, LogoSC } from "./styles/styled";
import logoImg from "../../assets/logo.png";
import Input from "../../components/input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import useLogin from "./hooks/useGetLogin";
import ModalError from "../../components/modalError";

const Signin: React.FC = () => {
  const navigate = useNavigate();
  const { login, loading, error } = useLogin();
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await login(email, senha);

    if (response) {
      navigate("/condosmart");
      window.location.reload();
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ContainerSC>
      <LogoSC>
        <img src={logoImg} alt="Condo Smart" />
        <h2>Condo Smart</h2>
      </LogoSC>
      <FormSC onSubmit={handleSubmitLogin}>
        <FormTitleSC>Entrar</FormTitleSC>
        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Carregando..." : "Acessar"}
        </Button>
      </FormSC>
      {showModal && (
        <ModalError
          message={error || "Erro desconhecido"}
          onClose={closeModal}
        />
      )}
    </ContainerSC>
  );
};

export default Signin;
