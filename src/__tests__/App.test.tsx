import { describe, it, expect } from "vitest";

import { render, waitFor, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { routesConfig } from "@/routes";
import DebounceContextProvider from "@/lib/DebounceContextProvider";

const router = createMemoryRouter(routesConfig);
const queryClient = new QueryClient();

const RootElement = () => (
  <QueryClientProvider client={queryClient}>
    <DebounceContextProvider>
      <RouterProvider router={router} />
    </DebounceContextProvider>
  </QueryClientProvider>
);

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
  it("should navigate to Blog page", async () => {
    render(<RootElement />);
    const element = screen.getByText("Blog");
    userEvent.click(element);
    await waitFor(() =>
      expect(screen.getByText("coming soon Blog...")).toBeInTheDocument()
    );
    expect(screen.queryByText("coming soon Docs...")).not.toBeInTheDocument();
    expect(
      screen.queryByText("coming soon Packages...")
    ).not.toBeInTheDocument();
  });
  it("should navigate to Stats page", async () => {
    render(<RootElement />);
    const element = screen.getByText("Stats");
    userEvent.click(element);
    await waitFor(() =>
      expect(screen.getByText("coming soon Stats...")).toBeInTheDocument()
    );
    expect(screen.queryByText("coming soon Docs...")).not.toBeInTheDocument();
    expect(
      screen.queryByText("coming soon Packages...")
    ).not.toBeInTheDocument();
  });
  it("should render searchPackages", () => {
    render(<RootElement />);
  });
});
