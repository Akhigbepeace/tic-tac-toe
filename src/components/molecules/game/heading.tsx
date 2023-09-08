import Logo from "@/components/atoms/logo";
import PlayerTurn from "@/components/atoms/player-turn";
import RestartButton from "@/components/atoms/restart-button";
import React from "react";

type HeadingProps = {
  onRestart: () => void;
  nextPlayer: string;
  initialPlayer: string;
};

const Heading = (props: HeadingProps) => {
  const { onRestart, nextPlayer, initialPlayer } = props;

  return (
    <div className="flex justify-between items-center mb-[64px] lg:mb-0 ">
      <Logo />

      <PlayerTurn initialPlayer={initialPlayer} nextPlayer={nextPlayer} />

      <RestartButton onRestart={onRestart} />
    </div>
  );
};

export default Heading;
