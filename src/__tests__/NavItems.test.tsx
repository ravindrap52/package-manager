import { describe, expect, it } from "vitest";

import { render } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

import "@testing-library/jest-dom";

import { headerNavItems } from "@/lib/navItems";

import NavItems from "@/components/NavItems";

describe("NavItems", () => {
  it("should render the nav items as list", () => {
    render(
      <MemoryRouter>
        <NavItems navItems={headerNavItems} />
      </MemoryRouter>
    );
  });
  it("should match the list of the items rendered", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <NavItems navItems={headerNavItems} />
      </MemoryRouter>
    );
    expect(getByTestId("navItems").children.length).toBe(
        headerNavItems.length
    );
  });
});