import GameBlocks from "@/components/molecules/game/game-blocks";
import Heading from "@/components/molecules/game/heading";
import Scores from "@/components/molecules/game/scores";
import React, { useState, ReactNode } from "react";

const GameStart = () => {
  const [gameBlocks, setGameBlocks] = useState<Array<ReactNode>>(
    Array(9).fill("")
  );

  return (
    <div>
      <div className="flex flex-col max-w-[456px] lg:p-0 p-[24px] mx-auto">
        <Heading setGameBlocks={setGameBlocks} />

        <GameBlocks gameBlocks={gameBlocks} setGameBlocks={setGameBlocks} />

        <Scores />
      </div>
    </div>
  );
};

export default GameStart;
