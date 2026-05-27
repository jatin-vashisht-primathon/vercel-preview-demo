import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import FaqAccordion from "../FaqAccordion";

// Regression CAR41-328 — "Home FAQ section should match care41.net".
// Bug: the FAQ block was double-constrained to max-w-3xl (768px) and centered,
// and answers toggled with an instant `hidden`. The fix makes the section
// full-width and gives the accordion a single-open, animated toggle. These
// assertions codify the expected post-fix behaviour and fail on the old code.
describe("regression CAR41-328 — home FAQ matches care41", () => {
  beforeEach(() => {
    render(<FaqAccordion />);
  });

  it("renders the accordion full-width (no max-w-3xl cap)", () => {
    expect(document.querySelector("div.w-full")).not.toBeNull();
    expect(document.body.querySelector(".max-w-3xl")).toBeNull();
  });

  it("opens the first question by default", () => {
    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
  });

  it("keeps a single panel open and lets the open one collapse", () => {
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[1]); // open #2 → #1 closes
    expect(buttons[0]).toHaveAttribute("aria-expanded", "false");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(buttons[1]); // click open one → collapses (openIndex -1)
    expect(buttons[1]).toHaveAttribute("aria-expanded", "false");
  });

  it("rotates the chevron when a question is expanded", () => {
    const chevron = screen.getAllByRole("button")[0].querySelector("svg");
    expect(chevron?.getAttribute("class") ?? "").toContain("rotate-180");
  });
});
