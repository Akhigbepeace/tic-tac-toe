import { NextRouter } from "next/router";


export const handleNewGameVsComputer = (router: NextRouter, setLoading: any) => {
  setLoading(true);
  router.push("/game-start");
};

export const handleNewGameVsPlayer = (router: NextRouter, setLoading: any) => {
  setLoading(true);
  router.push("/game-start");
};
