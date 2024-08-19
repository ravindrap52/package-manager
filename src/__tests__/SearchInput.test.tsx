import { render, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";

import { describe, it, expect, vi } from "vitest";

import DebounceContextProvider from "@/lib/DebounceContextProvider";
import { validateSearchTerm } from "@/lib/ValidateSearchTerm";

import { useDebounce } from "@/hooks/useDebounce";

import SearchInput from "@/components/SearchInput";

vi.mock("@/hooks/useDebounce", () => {
  return {
    useDebounce: vi.fn(),
  };
});

const RootElement = () => (
  <DebounceContextProvider>
    <SearchInput />
  </DebounceContextProvider>
);

describe("SearchInput", () => {
  it("should render SearchInput", () => {
    render(<RootElement />);
  });
  it("should render the input field", () => {
    const { getByTestId } = render(<RootElement />);
    const inputElement = getByTestId("searchForPackages");
    expect(inputElement).toBeInTheDocument();
  });
  it("should validate the text input and check if the textbox is having the inputed value", () => {
    const { getByTestId } = render(<RootElement />);
    const inputElement = getByTestId("searchForPackages");
    fireEvent.change(inputElement, { target: { value: "@react" } });
    const isValid = validateSearchTerm("@react");
    expect(isValid).toBeTruthy();
    expect(inputElement).toHaveValue("@react");
  });
  it("should show the error message when the input value is not valid", () => {
    const { getByTestId, getByText } = render(<RootElement />);
    const inputElement = getByTestId("searchForPackages");
    fireEvent.change(inputElement, { target: { value: "%react" } });
    const isValid = validateSearchTerm("%react");
    expect(isValid).toBeFalsy();
    expect(inputElement).toHaveValue("%react");
    const errorElement = getByTestId("errorMessage");
    expect(errorElement).toBeInTheDocument();
    expect(getByText("Package name must be alphanumeric and up to 214 characters long.")).toBeInTheDocument();
    expect(errorElement).toHaveClass("text-red-500 py-4");
  });
  it("should call the debounce hook and update the value", async () => {
    const { getByTestId } = render(<RootElement />);
    const inputElement = getByTestId("searchForPackages") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "javascript" } });
    vi.mocked(useDebounce).mockReturnValue("javascript");
    expect(useDebounce("javascript", 200)).toBe("javascript");
  });
});
