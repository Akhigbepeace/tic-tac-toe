import GameBlocks from "@/components/molecules/game/game-blocks";
import Heading from "@/components/molecules/game/heading";
import Scores from "@/components/molecules/game/scores";
import React from "react";

const GameStart = () => {
  return (
    <div>
      <div className="flex flex-col max-w-[456px] lg:p-0 p-[24px] mx-auto">
        <Heading />

        <GameBlocks />

        <Scores />
      </div>
    </div>
  );
};

export default GameStart;