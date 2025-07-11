import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const ModalContent = styled.div`
  padding: 30px;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 36px;
  color: #999;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: #666;
  }
`;

const Input = styled.input`
  width: 300px;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 0 0 1px #ccc inset;
  margin-bottom: 15px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #009344 inset;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #009344;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
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
`;

const SignInModal = ({ onClose, setShowSignUp }) => {
  return (
    <ModalOverlay>
      <CloseIconWrapper onClick={onClose}>
        <RxCross2 />
      </CloseIconWrapper>

      <ModalContent>
        <h2 style={{ textAlign: "center", color: "#009344", marginBottom: "20px" }}>
          Sign in
        </h2>

        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Password" />

        <SubmitButton>Sign In</SubmitButton>

        <div style={{ textAlign: "center", marginTop: "10px", fontSize: "14px" }}>
          Not registered?{" "}
          <span
            onClick={() => {
              onClose();
              setTimeout(() => setShowSignUp(true), 300);
            }}
            style={{ color: "#1e7b3c", cursor: "pointer", textDecoration: "underline" }}
          >
            Sign up
          </span>
          <br />
          <span style={{ color: "#009344", cursor: "pointer" }}>Reset password</span>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SignInModal;


