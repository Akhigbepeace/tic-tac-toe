import { calculateWinner } from "@/components/molecules/game/calculateWinner";
import GameBlocks from "@/components/molecules/game/game-blocks";
import Heading from "@/components/molecules/game/heading";
import Scores from "@/components/molecules/game/scores";
import React, { useState, ReactNode } from "react";

const GameStart = () => {
  const [gameBlocks, setGameBlocks] = useState<Array<ReactNode>>(
    Array(9).fill("")
  );

  const [gameResult, setGameResult] = useState<string | null | ReactNode>(null);

  const [currentPlayer, setCurrentPlayer] = useState<ReactNode>("O");

  const [nextPlayer, setNextPlayer] = useState("O");

  const [showModal, setShowModal] = useState(false);

  const handleRestart = () => {
    setGameResult(null);
    setGameBlocks(Array(9).fill(""));
  };

  const handleBlockClick = (index: number) => {
    if (gameBlocks[index] === "" && !gameResult) {
      const newGameBlocks = [...gameBlocks];
      newGameBlocks[index] = currentPlayer;

      setNextPlayer(nextPlayer === "O" ? "X" : "O");
      setGameBlocks(newGameBlocks);
      setCurrentPlayer(nextPlayer);
      checkGameResult(newGameBlocks);
    }
  };

  const checkGameResult = (squares: ReactNode[]) => {
    const winner = calculateWinner(squares);
    console.log("The winner is ==?", winner);
    if (winner) {
      setTimeout(() => {
        setGameResult(winner);
        setShowModal(true);
      }, 1000);
    }
  };

  return (
    <div>
      <div className="flex flex-col max-w-[456px] lg:p-0 p-[24px] mx-auto">
        <Heading onRestart={handleRestart} nextPlayer={nextPlayer} />

        <GameBlocks
          gameResult={gameResult}
          setGameResult={setGameResult}
          gameBlocks={gameBlocks}
          handleBlockClick={handleBlockClick}
          showModal={showModal}
          setShowModal={setShowModal}
          setGameBlocks={setGameBlocks}
        />

        <Scores />
      </div>
    </div>
  );
};

export default GameStart;
