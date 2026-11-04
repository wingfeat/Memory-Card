import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import ScoreBoard from "../src/components/ScoreBoard.jsx";

it(`Affiche le score et le meilleur score reçus en props`, () => {
  render(<ScoreBoard score={3} bestScore={5} />);

  expect(screen.getByText("3")).toBeInTheDocument();
  expect(screen.getByText("5")).toBeInTheDocument();
});
