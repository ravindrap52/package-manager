import { describe, it, expect, vi } from "vitest";

import { render, fireEvent } from "@testing-library/react";

import Packages from "@/pages/Packages";
import { useDebounce } from "@/hooks/useDebounce";

vi.mock("@/hooks/useDebounce", () => {
  return {
    useDebounce: vi.fn(),
  };
});

describe("Packages", () => {
  it("should render the package component", () => {
    const { getByText, getByTestId } = render(<Packages />);
    expect(getByText("Content Area")).toBeInTheDocument();
    expect(getByTestId("searchForPackages")).toBeInTheDocument();
  });
  it("onchange should update the value", () => {
    const { getByTestId } = render(<Packages />);
    const inputElement = getByTestId("searchForPackages") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "javascript" } });
    expect(inputElement.value).toBe("javascript");
  });
  it("should call the debounce hook", async () => {
    const { getByTestId } = render(<Packages />);
    const inputElement = getByTestId("searchForPackages") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "javascript" } });
    vi.mocked(useDebounce).mockReturnValue("javascript");
    expect(useDebounce("javascript", 200)).toBe("javascript");
  });
});
