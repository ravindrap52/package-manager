import "@testing-library/jest-dom";

import { describe, it, expect } from "vitest";

import { fetchPackages } from "@/hooks/usePackage";

describe("Fetch Data", () => {
  it("should fetch the data based on search string", async () => {
    const { searchData } = await fetchPackages("react", 1, 5);
    expect(searchData).not.toBeNull();
    expect(searchData.length).toBe(5);
  }, 10000);
});
