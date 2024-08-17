import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import "@testing-library/jest-dom";

import { describe, it, vi } from "vitest";

import Header from "@/components/Header";

describe("Header", () => {
  it("should render header", () => {
    render(
      <MemoryRouter>
        <Header handleOnClick={vi.fn()} />
      </MemoryRouter>
    );
  });
});
