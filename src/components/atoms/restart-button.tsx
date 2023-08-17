import React, { useState } from "react";
import Button from "./button";
import { FaArrowRotateRight } from "react-icons/fa6";
import Modal from "../organisms/modal";

const RestartButton = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalClsx = showModal ? "block" : "hidden";

  const handleModalDisplay = () => {
    setShowModal(!showModal);
  };

  const handleRestartGame = () => {
    console.log("Restart Game");
  };

  return (
    <div>
      <Button
        variant="restart"
        size="small"
        handleOnClick={handleModalDisplay}
        className="flex relative justify-center"
      >
        <FaArrowRotateRight size={25} />
      </Button>

      <Modal
        showModalClsx={showModalClsx}
        handlePrimaryButton={handleRestartGame}
        handleSecondaryButton={handleModalDisplay}
        primaryButtonText="YES, RESTART "
        secondaryButtonText="NO, CANCEL"
      />
    </div>
  );
};

export default RestartButton;
