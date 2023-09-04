import Typography from "@/components/atoms/typography";
import clsx from "clsx";
import React from "react";

type ScoresProps = {
  playerXScore: number;
  drawScore: number;
  playerOScore: number;
};

const Scores = (props: ScoresProps) => {
  const { playerXScore, drawScore, playerOScore } = props;
  const scores = [
    {
      title: "X (YOU)",
      background: "bg-dark-blue",
      playerScore: playerXScore,
    },
    {
      title: "TIES",
      background: "bg-dark-grey",
      playerScore: drawScore,
    },
    {
      title: "O (CPU)",
      background: "bg-dark-yellow",
      playerScore: playerOScore,
    },
  ];
  return (
    <div className="flex justify-between items-center gap-[20px]">
      {scores.map((score, index) => {
        const { title, playerScore } = score;
        return (
          <div
            key={index}
            className={clsx(
              score.background,
              "text-center flex flex-col text-dark-navy w-full rounded-[10px] p-[12px_19px] lg:p-[13px_42px] "
            )}
          >
            <Typography variant="p" color="navy">
              {title}
            </Typography>
            <Typography variant="h2" color="navy">
              {playerScore}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default Scores;
