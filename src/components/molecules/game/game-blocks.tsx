import React from "react";

const GameBlocks = () => {
  const gameBlocks = ["", "", "", "", "", "", "", "", ""];
  return (
    <div className="grid grid-cols-3 gap-[20px]  my-[19px]">
      {gameBlocks.map((block, index) => {
        return (
          <div
            key={index}
            className="lg:w-[140px] lg:h-[140px] mx-auto w-[96px] h-[96px] rounded-[10px] bg-light-navy shadow-[0px_8px_0px_#10212A] "
          >
            {block}
          </div>
        );
      })}
    </div>
  );
};

export default GameBlocks;
