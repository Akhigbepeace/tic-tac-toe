import React from "react";
import Button from "./button";
import { FaArrowRotateRight } from "react-icons/fa6";

const RestartButton = () => {
  const handleRestartGame = () => {
    console.log("Restart Game");
  };

  return (
    <Button
      variant="restart"
      size="small"
      handleOnClick={handleRestartGame}
      className="flex justify-center"
    >
      <FaArrowRotateRight size={25} />
    </Button>
  );
};

export default RestartButton;
