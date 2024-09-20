import styled from "styled-components";

export const ContainerSC = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const LogoSC = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  > h2 {
    color: ${(props) => props.theme.colors.black};
    margin-left: 10px;
  }

  > img {
    width: 40px;
    height: 40px;
  }
`;

export const TitleSC = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const FormSC = styled.form`
  width: 300px;
  height: 300px;

  padding: 30px;

  border: 10px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const FormTitleSC = styled.h1`
  margin-bottom: 50px;
  color: ${(props) => props.theme.colors.black};
  &::after {
    content: "";
    display: block;
    width: 55px;
    border-bottom: 10px solid ${(props) => props.theme.colors.blue};
  }
`;
