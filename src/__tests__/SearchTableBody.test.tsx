import { Table } from "@mui/material";

import { render } from "@testing-library/react";

import "@testing-library/jest-dom";

import { describe, it, expect } from "vitest";

import SearchTableBody from "@/components/table/SearchTableBody";

const tableRowData = [
  {
    id: 0,
    name: "react",
    stars: 0,
    repository_url: "https://github.com/KillerJumper/embed-pages",
  },
];
const fetching = true;

describe("SearchTableBody", () => {
  it("should render search table body component", () => {
    render(
      <Table>
        <SearchTableBody rowData={tableRowData} fetching={fetching} />
      </Table>
    );
  });
  it("should show loading text", () => {
    const { getByText } = render(
      <Table>
        <SearchTableBody rowData={tableRowData} fetching={true} />
      </Table>
    );
    expect(getByText("Loading data, please wait...")).toBeInTheDocument();
  });
  it("should show no data available text", () => {
    const { getByText } = render(
      <Table>
        <SearchTableBody rowData={[]} fetching={false} />
      </Table>
    );
    expect(getByText("No data available")).toBeInTheDocument();
  });
  it("should show have one row", () => {
    const { getByTestId } = render(
      <Table>
        <SearchTableBody rowData={tableRowData} fetching={false} />
      </Table>
    );
    const tableRow = getByTestId("rowData_0");
    expect(tableRow.children.length).toBe(3);
  });
});
