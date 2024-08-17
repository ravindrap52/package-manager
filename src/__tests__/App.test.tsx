import { describe, it, expect } from "vitest";

import { render, waitFor, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { createMemoryRouter, RouterProvider } from "react-router-dom";

import { routesConfig } from "@/routes";

const router = createMemoryRouter(routesConfig);

const RootElement = () => <RouterProvider router={router} />;

describe("App Component", () => {
  it("should render the App with header, footer, and main content", async () => {
    render(<RootElement />);
    await waitFor(() => screen.getByTestId("app"));
    await waitFor(() => screen.getByTestId("header"));
    await waitFor(() => screen.getByTestId("main"));
    await waitFor(() => screen.getByTestId("footer"));
  });
  it("should render the haeder nav items", async () => {
    render(<RootElement />);
    await waitFor(() => screen.getByTestId("navItems"));
    expect(screen.getByText("Docs")).toBeInTheDocument();
    expect(screen.getByText("Search packages")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Stats")).toBeInTheDocument();
  });
  it("should navigate to Docs page", async () => {
    render(<RootElement />);
    const element = screen.getByText("Docs");
    userEvent.click(element);
    await waitFor(() =>
      expect(screen.getByText("coming soon Docs...")).toBeInTheDocument()
    );
  });
  it("should navigate to Search packages page", async () => {
    render(<RootElement />);
    const element = screen.getByText("Search packages");
    userEvent.click(element);
    await waitFor(() =>
      expect(screen.getByText("coming soon Packages...")).toBeInTheDocument()
    );
    expect(screen.queryByText("coming soon Docs...")).not.toBeInTheDocument()
  });
  it("should navigate to Blog page", async () => {
    render(<RootElement />);
    const element = screen.getByText("Blog");
    userEvent.click(element);
    await waitFor(() =>
      expect(screen.getByText("coming soon Blog...")).toBeInTheDocument()
    );
    expect(screen.queryByText("coming soon Docs...")).not.toBeInTheDocument();
    expect(screen.queryByText("coming soon Packages...")).not.toBeInTheDocument()
  });
  it("should navigate to Stats page", async () => {
    render(<RootElement />);
    const element = screen.getByText("Stats");
    userEvent.click(element);
    await waitFor(() =>
      expect(screen.getByText("coming soon Stats...")).toBeInTheDocument()
    );
    expect(screen.queryByText("coming soon Docs...")).not.toBeInTheDocument();
    expect(screen.queryByText("coming soon Packages...")).not.toBeInTheDocument()
  });
});
