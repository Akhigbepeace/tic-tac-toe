import { ReactNode } from "react";

export const calculateWinner = (squares: ReactNode[]): any | null => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], combo };
    }
  }

  if (squares.every((block) => block !== "")) {
    return { player: "draw", combo: [] };
  }

  return null;
};
