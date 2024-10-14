import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ImageContainer = styled.div`
  margin-right: 20px;
`;

export const Image = styled.img`
  width: 150px;
  height: auto;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;
