import React, { useState, ReactNode } from "react";
import XIcon from "@/components/atoms/x-icon";
import OIcon from "@/components/atoms/o-icon";

interface GameBlocksProps {
  gameBlocks: ReactNode[];
  setGameBlocks: (value: ReactNode[]) => void;
}

const GameBlocks = (props: GameBlocksProps) => {
  const { gameBlocks, setGameBlocks } = props;

  const [currentPlayer, setCurrentPlayer] = useState<any>(OIcon);

  const handleBlockClick = (index: number) => {
    if (gameBlocks[index] === "" && !calculateWinner(gameBlocks)) {
      const newGameBlocks = [...gameBlocks];
      newGameBlocks[index] = currentPlayer;
      setGameBlocks(newGameBlocks);
      setCurrentPlayer(currentPlayer === "O" ? "X" : "O");
    }
  };

  const calculateWinner = (squares: ReactNode[]): ReactNode | null => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  return (
    <div className="grid grid-cols-3 gap-[20px]  my-[19px]">
      {gameBlocks.map((block, index) => {
        return (
          <div
            key={index}
            className="lg:w-[140px] lg:h-[140px] mx-auto w-[96px] h-[96px] grid rounded-[10px] bg-light-navy shadow-[0px_8px_0px_#10212A] "
            onClick={() => handleBlockClick(index)}
          >
            {block === "X" && <XIcon />}
            {block === "O" && <OIcon />}
          </div>
        );
      })}
    </div>
  );
};

export default GameBlocks;
