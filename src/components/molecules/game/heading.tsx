import Logo from "@/components/atoms/logo";
import PlayerTurn from "@/components/atoms/player-turn";
import RestartButton from "@/components/atoms/restart-button";
import React, { ReactNode } from "react";

interface HeadingProps {
  setGameBlocks: (value: ReactNode[]) => void;
}

const Heading = ({ setGameBlocks }: HeadingProps) => {
  // const Heading = ({ setGameBlocks }: (value: ReactNode[]) => void) => {
  return (
    <div className="flex justify-between items-center mb-[64px] lg:mb-0 ">
      <Logo />

      <PlayerTurn />

      <RestartButton setGameBlocks={setGameBlocks} />
    </div>
  );
};

export default Heading;
