import { useState } from "react";

import { Outlet } from "react-router-dom";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavItemsAsList from "@/components/NavItemsAsList";

import { headerNavItems, sidebarNavItems } from "@/lib/navItems";


export default function App() {
  const [toggle, setToggle] = useState(false);

  //function to toggle menu
  const handleOnClick = (): void => {
    setToggle(true);
  };
  return (
    <section className="bg-gray-100 flex flex-col min-h-screen" data-testid="app">
      {/* Header */}
      <Header handleOnClick={handleOnClick}  />

      {/* Mobile Sidebar */}
      {toggle ? (
        <aside
          data-testid="mobileNav"
          className={`fixed top-0 left-0 w-64 bg-white shadow-md p-4 h-full transform transition-transform md:hidden z-50 ${
            toggle ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-gray-600 focus:outline-none"
            onClick={() => setToggle(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <NavItemsAsList navItems={headerNavItems} />
        </aside>
      ) : null}

      {/* Sidebar */}

      <main className="flex flex-1 flex-col md:flex-row p-4" data-testid="main">
        <aside className="w-full md:w-1/4 bg-white shadow-md p-4 mb-4 md:mb-0 md:mr-4">
          <NavItemsAsList navItems={sidebarNavItems} />
        </aside>

        {/* Content Area */}
        <section className="flex-1 bg-white shadow-md p-4">
          <Outlet />
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </section>
  );
}
