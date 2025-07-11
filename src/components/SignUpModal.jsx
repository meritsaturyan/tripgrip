import React from 'react';
import styled from 'styled-components';
import { RxCross2 } from "react-icons/rx";

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  backdrop-filter: blur(6px);
  background: rgba(0, 0, 0, 0);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background: transparent;
  border-radius: 8px;
  padding: 30px 40px;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  color: #009344;
  margin-bottom: 20px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;


const Input = styled.input`
  width: 304px;
  height: 54px;
  margin-bottom: 12px;
  padding: 0 12px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 0 0 1px #ccc inset;
  box-sizing: border-box;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #009344 inset;
  }
`;

const Button = styled.button`
  width: 304px;
  height: 54px;
  background-color: #009344;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  box-sizing: border-box;
`;


const CloseIconWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 3000;
  cursor: pointer;

  svg {
    width: 84px;
    height: 84px;
    color: gray;
  }

  &:hover svg {
    color: #666;
  }
`;

const SignUpModal = ({ onClose }) => {
  return (
    <Overlay>
      <CloseIconWrapper onClick={onClose}>
        <RxCross2 />
      </CloseIconWrapper>

      <Modal>
        <Title>Site Registration</Title>

        <FormContainer>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="E-mail" type="email" />
          <Input placeholder="Password" type="password" />
          <Button>Sign Up</Button>
        </FormContainer>
      </Modal>
    </Overlay>
  );
};

export default SignUpModal;








