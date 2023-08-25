import React, { useState } from "react";
import Button from "./button";
import Modal from "../organisms/modal";
import Image from "next/image";
import Typography from "./typography";

type RestartButtonProps = {
  onRestart: () => void;
};

const RestartButton = ({ onRestart }: RestartButtonProps) => {
  const [showModal, setShowModal] = useState(false);

  const showModalClsx = showModal ? "block" : "hidden";

  const handleModalDisplay = () => {
    setShowModal(!showModal);
  };

  const handleRestartGame = () => {
    onRestart();
    setShowModal(false);
  };

  const restartIcon = "/assets/icon-restart.svg";

  return (
    <div>
      <Button variant="restart" size="small" handleOnClick={handleModalDisplay}>
        <div className="flex relative justify-center">
          <Image
            src={restartIcon}
            alt="restart-icon"
            width={20}
            height={20}
            className="w-[20px] h-[20px] object-cover"
          />
        </div>
      </Button>

      <Modal
        heading={
          <Typography variant={"h1"} color={"grey"}>
            RESTART GAME?
          </Typography>
        }
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
