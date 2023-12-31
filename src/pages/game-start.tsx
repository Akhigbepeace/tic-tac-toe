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

  const [currentPlayer, setCurrentPlayer] = useState<ReactNode>("X");

  const [nextPlayer, setNextPlayer] = useState<string>("O");

  const [showModal, setShowModal] = useState<boolean>(false);

  const [playerXScore, setPlayerXScore] = useState<number>(0);

  const [drawScore, setDrawScore] = useState<number>(0);

  const [playerOScore, setPlayerOScore] = useState<number>(0);

  const [gameSubHeading, setGameSubHeading] = useState<string>("");

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

    if (winner?.player === "draw") {
      setGameSubHeading("");
    }

    if (currentPlayer !== winner?.player) {
      setGameSubHeading(gameSubHeading);
    }

    if (winner?.player === "X") {
      setPlayerXScore(playerXScore + 1);
    }

    if (winner?.player === "draw") {
      setDrawScore(drawScore + 1);
    }

    if (winner?.player === "O") {
      setPlayerOScore(playerOScore + 1);
    }

    if (winner) {
      setTimeout(() => {
        setGameResult(winner);
        setShowModal(true);
      }, 1000);
    }
  };

  return (
    <div>
      <div className="flex flex-col max-w-[456px] h-screen justify-center lg:p-0   p-[24px] mx-auto">
        <Heading onRestart={handleRestart} nextPlayer={nextPlayer} initialPlayer={""} />

        <GameBlocks
          gameResult={gameResult}
          setGameResult={setGameResult}
          gameBlocks={gameBlocks}
          handleBlockClick={handleBlockClick}
          showModal={showModal}
          setShowModal={setShowModal}
          setGameBlocks={setGameBlocks}
          gameSubHeading={gameSubHeading}
        />

        <Scores
          playerXScore={playerXScore}
          drawScore={drawScore}
          playerOScore={playerOScore}
        />
      </div>
    </div>
  );
};

export default GameStart;
