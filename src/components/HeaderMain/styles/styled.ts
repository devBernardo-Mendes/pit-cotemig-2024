import styled from "styled-components";

export const ContainerSC = styled.div`
  grid-area: MH;
  color: ${(props) => props.theme.colors.black};

  background-color: ${(props) => props.theme.colors.primary};
`;
