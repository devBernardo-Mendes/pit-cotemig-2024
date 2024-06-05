import styled from "styled-components";

export const ContainerSC = styled.div`
  grid-area: AS;

  border-right: 0.063rem solid ${(props) => props.theme.colors.gray};
  padding-left: 20px;
  background-color: #f4f4f4;
`;

export const HeaderSC = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`;

export const LogImgSC = styled.img`
  height: 40px;
  width: 40px;
`;

export const TitleSC = styled.a`
  color: ${(props) => props.theme.colors.black};
  margin-left: 10px;
`;

export const MenuContainerSC = styled.nav`
  display: flex;
  flex-direction: column;

  margin-top: 50px;
`;

export const MenuIntemLinkSC = styled.a`
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;
  margin: 7px 0;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 20px;
    margin-right: 5px;
  }
`;
