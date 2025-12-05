import { setThemeMock } from "@/__mocks__/next-themes";

import { ThemeSelector } from "@/components/ThemeSelector";

import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

test("Theme selector", async () => {
  render(<ThemeSelector />);
  window.HTMLElement.prototype.scrollIntoView = function () {}; // Implementing this line to prevent scrollIntoView is not a function error.

  const trigger = screen.getByRole("combobox");
  fireEvent.click(trigger);

  const darkOption = await screen.findByText("Dark");
  expect(darkOption).toBeDefined();

  fireEvent.click(darkOption);
  expect(setThemeMock).toHaveBeenCalledWith("dark");
});
