import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import getRandomPokemons from "../src/api/getRandomPokemons";
import App from "../src/App";
import userEvent from "@testing-library/user-event";

vi.mock("../src/api/getRandomPokemons.js");

afterEach(() => {
  vi.clearAllMocks();
});

describe("App", () => {
  it("Should render two valid pokemons", async () => {
    getRandomPokemons.mockResolvedValue([
      { id: 1, name: "bulbasaur", img: "bulbasaur.png" },
      { id: 4, name: "charmander", img: "charmander.png" },
    ]);

    render(<App />);

    expect(await screen.findByText("BULBASAUR")).toBeInTheDocument();
    expect(await screen.findByText("CHARMANDER")).toBeInTheDocument();
  });
  it("shows the error screen when loading fails", async () => {
    getRandomPokemons.mockRejectedValue(new Error("Pas d'internet"));

    render(<App />);

    expect(await screen.findByRole("alert")).toBeInTheDocument();
  });
  it("increases the score after clicking a new card", async () => {
    getRandomPokemons.mockResolvedValue([
      { id: 1, name: "bulbasaur", img: "bulbasaur.png" },
      { id: 4, name: "charmander", img: "charmander.png" },
    ]);

    render(<App />);

    const user = userEvent.setup();
    await user.click(await screen.findByRole("button", { name: /bulbasaur/i }));

    expect(screen.getByText("Current score").closest("p")).toHaveTextContent(
      "1",
    );
  });
  it("Score should return to 0 when clicking the same card", async () => {
    getRandomPokemons.mockResolvedValue([
      { id: 1, name: "bulbasaur", img: "bulbasaur.png" },
      { id: 4, name: "charmander", img: "charmander.png" },
    ]);

    render(<App />);

    const user = userEvent.setup();
    await user.click(await screen.findByRole("button", { name: /bulbasaur/i }));
    expect(screen.getByText("Current score").closest("p")).toHaveTextContent(
      "1",
    );

    await user.click(await screen.findByRole("button", { name: /bulbasaur/i }));
    expect(screen.getByText("Current score").closest("p")).toHaveTextContent(
      "0",
    );
  });
  it("Display winner screen when clicking on all different pokemons", async () => {
    getRandomPokemons.mockResolvedValue([
      { id: 1, name: "bulbasaur", img: "bulbasaur.png" },
      { id: 4, name: "charmander", img: "charmander.png" },
    ]);

    render(<App />);

    const user = userEvent.setup();
    await user.click(await screen.findByRole("button", { name: /bulbasaur/i }));
    await user.click(
      await screen.findByRole("button", { name: /charmander/i }),
    );

    expect(
      await screen.findByRole("button", { name: "Replay" }),
    ).toBeInTheDocument();
  });
});
