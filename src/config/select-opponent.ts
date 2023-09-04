import { NextRouter } from "next/router";

export const handleNewGameVsComputer = (router: NextRouter) => {
  router.push("/game-start");
};

export const handleNewGameVsPlayer = (router: NextRouter) => {
  router.push("/game-start");
};
