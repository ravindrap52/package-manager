import { Table } from "@mui/material";

import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import { describe, it, expect } from "vitest";

import SearchTableHeader from "@/components/table/SearchTableHeader";

describe("SearchTableHeader", () => {
  it("should render search table header component", () => {
    render(
      <Table>
        <SearchTableHeader />
      </Table>
    );
  });
  it("should have a thead element", () => {
    const { getByTestId } = render(
      <Table>
        <SearchTableHeader />
      </Table>
    );
    expect(getByTestId("tableHeader")).toBeInTheDocument();
  });
  it("should have a tr element inside thead", () => {
    const { getByTestId } = render(
      <Table>
        <SearchTableHeader />
      </Table>
    );
    expect(getByTestId("tableHeaderRow")).toBeInTheDocument();
  });
  it("should have a th elements inside thead tr", () => {
    const { getByTestId } = render(
      <Table>
        <SearchTableHeader />
      </Table>
    );
    const tableRow = getByTestId("tableHeaderRow");
    expect(tableRow.children.length).toBe(3);
  });
});
