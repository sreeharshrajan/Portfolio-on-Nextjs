import Image from "next/image";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { PrimaryButton } from "./Button";

const ModalWrapper = styled.div`
  max-width: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  color: #1d1d1f;
  flex-direction: column;
  display: flex;
  border-radius: 2px;
  margin: 30px 0;
  padding: 50px;

  img {
    max-width: 250px;
    padding: 0 20px;
    margin: 0 auto 30px;
  }
`;

const SignUpHeader = styled.h3`
  font-size: 1.4rem;
  font-family: "Roboto Mono", monospace;
  text-align: center;
`;

const SignUpText = styled.p`
  font-size: 1rem;
  font-family: "Roboto Mono", monospace;
  max-width: 70%;
  margin: 0 auto 1.5rem;
  text-align: center;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateX(0)` : `translateX(-100%)`,
  });

  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <Image
          src="/images/sign-up.svg"
          alt="Sign up for an account"
          aria-hidden="true"
          layout="fill"
          quality={100}
        />
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText>Sign up today to get access!</SignUpText>
        <PrimaryButton>Sign up</PrimaryButton>
      </ModalWrapper>
    </animated.div>
  );
};
