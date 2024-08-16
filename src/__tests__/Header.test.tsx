import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import { describe, it, expect } from "vitest";

import Header from "@/components/Header";

describe("Header", () => {
  it("should render header", () => {
    render(<Header />);
  });
  it("should show logo text", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Package Manager")).toBeInTheDocument();
  });
  it("should render the nav items", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("navItems").children.length).toBe(4);
  });
});
