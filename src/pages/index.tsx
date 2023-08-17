import Button, {
  BackgroundVariant,
  SizeVariant,
} from "@/components/atoms/button";
import Logo from "@/components/atoms/logo";
import SelectSideButton from "@/components/molecules/select-side-button";
import {
  handleNewGameVsComputer,
  handleNewGameVsPlayer,
} from "@/config/select-opponent";
import React, { useState } from "react";
import { NextRouter, useRouter } from "next/router";

interface SelectOponentButtonType {
  variant: BackgroundVariant;
  size: SizeVariant;
  handleOnClick: (router: NextRouter, setLoading: any) => void;
  children: string;
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const selectOponentButton: SelectOponentButtonType[] = [
    {
      variant: "primaryButton1",
      size: "primary",
      handleOnClick: handleNewGameVsComputer,
      children: "NEW GAME (VS CPU)",
    },
    {
      variant: "primaryButton2",
      size: "primary",
      handleOnClick: handleNewGameVsPlayer,
      children: "NEW GAME (VS PLAYER)",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden px-[24px] md:px-0">
      <Logo />

      <SelectSideButton />

      <div className="flex flex-col gap-[20px]">
        {selectOponentButton.map((oponent, index) => (
          <Button
            key={index}
            variant={oponent.variant}
            size={oponent.size}
            handleOnClick={() => {
              oponent.handleOnClick(router, setLoading);
            }}
          >
            {loading ? "Please wait..." : oponent.children}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Home;
