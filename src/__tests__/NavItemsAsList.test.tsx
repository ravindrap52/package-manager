import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import { describe, it, expect } from "vitest";

import NavItemsAsList from "@/components/NavItemsAsList";

describe("Header", () => {
  it("should render header", () => {
    render(<NavItemsAsList />);
  });
  it("should render the nav items as list", () => {
    const { getByTestId } = render(<NavItemsAsList />);
    expect(getByTestId("navItemsAsList").children.length).toBe(4);
  });
});