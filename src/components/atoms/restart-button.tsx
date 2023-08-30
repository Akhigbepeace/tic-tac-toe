import React, { useState, ReactNode } from "react";
import Button from "./button";
import Modal from "../organisms/modal";
import Image from "next/image";

interface RestartButtonProps {
  setGameBlocks: (value: ReactNode[]) => void;
}

const RestartButton = ({ setGameBlocks }: RestartButtonProps) => {
  const [showModal, setShowModal] = useState(false);

  const showModalClsx = showModal ? "block" : "hidden";

  const handleModalDisplay = () => {
    setShowModal(!showModal);
  };

  const handleRestartGame = () => {
    setGameBlocks(Array(9).fill(""));
    setShowModal(false);
  };

  const restartIcon = "/assets/icon-restart.svg";

  return (
    <div>
      <Button
        variant="restart"
        size="small"
        handleOnClick={handleModalDisplay}
        className="flex relative justify-center"
      >
        <Image
          src={restartIcon}
          alt="restart-icon"
          width={20}
          height={20}
          className="w-[20px] h-[20px] object-cover"
        />
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
