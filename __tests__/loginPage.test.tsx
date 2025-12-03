import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import Page from "@/app/(auth)/login/page";

test("Page", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { level: 1, name: "Inka" })).toBeDefined();
});
