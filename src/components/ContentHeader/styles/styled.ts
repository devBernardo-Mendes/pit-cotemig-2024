import styled from "styled-components";

export const ContainerSC = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-bottom: 25px;
`;

export const TitleContainerSC = styled.div`
  > h1 {
    color: ${(props) => props.theme.colors.black};

    &::after {
      content: "";
      display: block;
      width: 55px;
      border-bottom: 10px solid ${(props) => props.theme.colors.warning};
    }
  }
`;

export const ControllersSC = styled.div``;
