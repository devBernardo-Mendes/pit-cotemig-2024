import styled from "styled-components";

export const ContainerSC = styled.div`
  grid-area: CT;
  color: ${(props) => props.theme.colors.black};

  background-color: ${(props) => props.theme.colors.secondary};
  padding: 25px;
`;
