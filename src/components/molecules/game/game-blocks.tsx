import React, { ReactNode } from "react";
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
  gameSubHeading: string | undefined;
  setGameBlocks: (value: ReactNode[]) => void;
  handleBlockClick: (value: number) => void;
  setShowModal: (value: boolean) => void;
  setGameResult: (value: string | null) => void;
};

const x_icon = (
  <div className="xl:w-[64px] xl:h-[64px] w-[28px] h-[28px] ">
    <XIcon />
  </div>
);

const o_icon = (
  <div className="xl:w-[64px] xl:h-[64px] w-[28px] h-[28px] ">
    <OIcon />
  </div>
);

const GameBlocks = (props: GameBlocksProps) => {
  const {
    gameBlocks,
    showModal,
    gameResult,
    setGameBlocks,
    handleBlockClick,
    setShowModal,
    setGameResult,
    gameSubHeading,
  } = props;

  const result = calculateWinner(gameBlocks);

  const handleQuitGame = () => setShowModal(false);

  const handleNextRound = () => {
    setGameResult(null);
    setGameBlocks(Array(9).fill(""));
    setShowModal(false);
  };

  let modalHeading;

  if (gameResult?.player === "draw") {
    modalHeading = (
      <Typography variant={"h1"} color={"grey"}>
        ROUND TIED
      </Typography>
    );
  } else if (gameResult) {
    modalHeading = (
      <div className="flex items-center justify-center gap-[8px] xl:gap-[24px]">
        {gameResult.player === "X" ? x_icon : o_icon}

        <Typography
          variant={"h1"}
          spacing="tracking-[1.5px]"
          color={gameResult.player === "X" ? "blue" : "yellow"}
        >
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
                "md:w-[140px] lg:h-[140px] mx-auto w-[96px] h-[96px] grid rounded-[10px] shadow-[0px_8px_0px_#10212A]"
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
          subHeading={gameSubHeading ? "YOU WON!" : "OH NO, YOU LOST…"}
          heading={modalHeading}
          handleSecondaryButton={handleQuitGame}
          handlePrimaryButton={handleNextRound}
          primaryButtonText={
            gameResult?.player === "draw" ? "YES, RESTART " : "NEXT ROUND"
          }
          secondaryButtonText={
            gameResult?.player === "draw" ? "NO, CANCEL" : "QUIT"
          }
        />
      )}
    </>
  );
};

export default GameBlocks;
