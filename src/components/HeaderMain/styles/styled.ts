import styled from "styled-components";

export const ContainerSC = styled.div`
  grid-area: MH;

  background-color: ${(props) => props.theme.colors.primary};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 0.625rem;
  border-bottom: 0.063rem solid ${(props) => props.theme.colors.gray};
`;

export const TitleSC = styled.h1`
  color: ${(props) => props.theme.colors.black};
`;
export const ProfileSC = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.black};
`;

export const WelcomeSC = styled.h3``;

export const UserNameSC = styled.span`
  margin-left: 5px;
  margin-right: 10px;
`;
