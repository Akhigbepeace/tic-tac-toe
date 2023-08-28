import React, { useState, ReactNode } from "react";
import XIcon from "@/components/atoms/x-icon";
import OIcon from "@/components/atoms/o-icon";
import Modal from "@/components/organisms/modal";
import { calculateWinner } from "./calculateWinner";
import Typography from "@/components/atoms/typography";
import clsx from "clsx";

type GameBlocksProps = {
  gameBlocks: ReactNode[];
  gameResult: string | null | any;
  showModal: boolean;
  setGameBlocks: (value: ReactNode[]) => void;
  handleBlockClick: (value: number) => void;
  setShowModal: (value: boolean) => void;
  setGameResult: (value: string | null) => void;
};

const GameBlocks = (props: GameBlocksProps) => {
  const {
    gameBlocks,
    showModal,
    gameResult,
    setGameBlocks,
    handleBlockClick,
    setShowModal,
    setGameResult,
  } = props;

  const result = calculateWinner(gameBlocks);

  const handleQuitGame = () => setShowModal(false);

  const handleNextRound = () => {
    setGameResult(null);
    setGameBlocks(Array(9).fill(""));
    setShowModal(false);
  };

  let modalHeading;

  if (gameResult === "draw") {
    modalHeading = (
      <Typography variant={"h1"} color={"grey"}>
        ROUND TIED
      </Typography>
    );
  } else if (gameResult) {
    const { winner } = gameResult;
    modalHeading = (
      <div className="flex gap-[24px]">
        {winner === "X" ? <XIcon /> : <OIcon />}

        <Typography variant={"h1"} color={winner === "X" ? "blue" : "yellow"}>
          TAKES THE ROUND
        </Typography>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-[20px]  my-[19px]">
        {gameBlocks.map((block, index) => {
          const isWinningBlock = result && result.combo.includes(index);
          const isWinningBlocks = isWinningBlock
            ? result.winner === "X"
              ? "bg-dark-blue shadow-[0px_8px_0px_#118C87]"
              : "bg-dark-yellow shadow-[0px_8px_0px_#CC8B13]"
            : "bg-light-navy ";

          return (
            <button
              key={index}
              className={clsx(
                isWinningBlocks,
                "lg:w-[140px] lg:h-[140px] mx-auto w-[96px] h-[96px] grid rounded-[10px] shadow-[0px_8px_0px_#10212A]"
              )}
              onClick={() => handleBlockClick(index)}
            >
              {block === "X" && <XIcon />}
              {block === "O" && <OIcon />}
            </button>
          );
        })}
      </div>

      {showModal && (
        <Modal
          heading={modalHeading}
          handleSecondaryButton={handleQuitGame}
          handlePrimaryButton={handleNextRound}
          primaryButtonText="NEXT ROUND"
          secondaryButtonText="QUIT"
        />
      )}
    </>
  );
};

export default GameBlocks;
