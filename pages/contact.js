import React, { useState } from "react";
import { SecondaryButton } from "../components/Button";
import { SignUpModal } from "../components/Modal";

function Contact() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    showModal === true ? setShowModal(false) : setShowModal(true);
  };
  return (
    <div>
      <div className="center">
        <h2>Modal</h2>
        <SecondaryButton onClick={toggleModal}>Toggle Modal</SecondaryButton>
      </div>
      <SignUpModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Contact;
