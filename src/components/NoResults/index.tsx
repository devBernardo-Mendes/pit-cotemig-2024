import React from "react";
import {
  Container,
  Content,
  Description,
  ImageContainer,
  TextContainer,
  Title,
} from "./styles/styled";
import emptySearch from "../../assets/emptySearch2.svg";

const NoResults: React.FC = () => {
  return (
    <Container>
      <Content>
        <ImageContainer>
          <img src={emptySearch} alt="No Results" />
        </ImageContainer>
        <TextContainer>
          <Title>Nenhum Resultado Encontrado</Title>
          <Description>
            Infelizmente não encontramos o que você estava procurando :/ Tente
            refazer sua busca ou limpar os filtro
          </Description>
        </TextContainer>
      </Content>
    </Container>
  );
};

export default NoResults;
