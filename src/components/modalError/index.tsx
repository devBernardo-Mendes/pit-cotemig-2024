import React, { useEffect } from "react";
import styled from "styled-components";
import { FaTimesCircle } from "react-icons/fa";

const ModalBackground = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.9);
  max-width: 200px;
  padding: 15px 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  word-wrap: break-word;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ErrorMessage = styled.p`
  color: "black";
  margin: 0;
`;

const Modal: React.FC<{ message: string; onClose: () => void }> = ({
  message,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <ModalBackground>
      <IconContainer>
        <FaTimesCircle size={24} color="red" />
        <span style={{ marginLeft: "8px", fontWeight: "bold", color: "red" }}>
          Sinto Muito!
        </span>
      </IconContainer>
      <ErrorMessage>{message}</ErrorMessage>
    </ModalBackground>
  );
};

export default Modal;
