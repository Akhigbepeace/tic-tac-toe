import Logo from "@/components/atoms/logo";
import PlayerTurn from "@/components/atoms/player-turn";
import RestartButton from "@/components/atoms/restart-button";
import React from "react";

const Heading = () => {
  return (
    <div className="flex justify-between items-center mb-[64px] lg:mb-0 ">
      <Logo />

      <PlayerTurn />

      <RestartButton />
    </div>
  );
};

export default Heading;
