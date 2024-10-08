import styled from "styled-components";

export const ContainerSC = styled.div`
  grid-area: CT;
  color: ${(props) => props.theme.colors.black};

  background-color: ${(props) => props.theme.colors.secondary};
  padding: 25px;

  height: calc(100vh - 70px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.tertiary};
  }
`;
