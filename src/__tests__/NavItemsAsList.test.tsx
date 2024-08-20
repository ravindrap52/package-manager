import { describe, expect, it } from "vitest";

import { render } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

import "@testing-library/jest-dom";

import { sidebarNavItems } from "@/lib/navItems";

import NavItemsAsList from "@/components/NavItemsAsList";

describe("NavItemsAsList", () => {
  it("should render the nav items as list", () => {
    render(
      <MemoryRouter>
        <NavItemsAsList navItems={sidebarNavItems} />
      </MemoryRouter>
    );
  });
  it("should match the list of the items rendered", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <NavItemsAsList navItems={sidebarNavItems} />
      </MemoryRouter>
    );
    expect(getByTestId("navItemsAsList").children.length).toBe(
      sidebarNavItems.length
    );
  });
});
