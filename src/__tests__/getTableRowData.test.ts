import "@testing-library/jest-dom";

import { describe, it, expect } from "vitest";

import { getTableRowData } from "@/lib/getTableRowData";

const tableRowData = [
  {
    id: 0,
    name: "react",
    stars: 0,
    repository_url: "https://github.com/KillerJumper/embed-pages",
  },
];
const result = [
  { id: 0, name: "react", stars: 0, repository_url: "KillerJumper" },
];
describe("Getting Table Row Data", () => {
  it("should get the table row data", () => {
    const data = getTableRowData(tableRowData);
    expect(data).toStrictEqual(result);
  });
});
