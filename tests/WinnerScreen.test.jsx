import { render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import WinnerScreen from "../src/components/WinnerScreen";
import userEvent from "@testing-library/user-event";

it("Vérifie que la fonction handleReplay est appelée sur le bouton replay", async () => {
  const handleReplay = vi.fn();

  render(<WinnerScreen handleReplay={handleReplay} />);

  const user = userEvent.setup();
  await user.click(screen.getByRole("button", { name: "Replay" }));

  expect(handleReplay).toHaveBeenCalledTimes(1);
});
