import { expect, it } from "vitest";
import Card from "../src/components/Card";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

it("Vérifie que la fonction handleClick est appelée sur une carte", async () => {
  const fakePokemon = { id: 1, name: "bulbasaur", img: "bulbasaur.png" };
  const handleClick = vi.fn();

  render(<Card pokemon={fakePokemon} handleClick={handleClick} />);

  const user = userEvent.setup();
  await user.click(screen.getByRole("button"));

  expect(handleClick).toHaveBeenCalledWith(1);
});
