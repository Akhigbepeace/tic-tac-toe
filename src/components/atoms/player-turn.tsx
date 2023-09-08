import Image from "next/image";
import React from "react";

type PlayerTurnProps = {
  nextPlayer: string;
  initialPlayer: String;
};

const PlayerTurn = ({ nextPlayer, initialPlayer }: PlayerTurnProps) => {
  const XShpae = "/assets/icon-x-grey.svg";
  const OShpae = "/assets/icon-o-grey.svg";

  return (
    <div className="flex items-center justify-center lg:w-[140px] gap-[13px] bg-light-navy rounded-[10px] p-[11px_15px] lg:p-[13px_30px] shadow-[0px_4px_0px_#10212A] h-[52px]">
      <div className="relative w-[20px] h-[20px] mx-auto">
        <Image src={nextPlayer === "O" ? XShpae : OShpae} alt="X-shape" fill />
      </div>
      <p className="text-[16px] text-dark-grey ">TURN</p>
    </div>
  );
};

export default PlayerTurn;
