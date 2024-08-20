import NavItems from "./NavItems";

import { headerNavItems } from "@/lib/navItems";
import { HeaderProps } from "@/lib/types";

export default function Header({ handleOnClick }: HeaderProps) {
  return (
    <header
      className="bg-teal-500 shadow-md relative z-10 w-full"
      data-testid="header"
    >
      <div className="container mx-auto p-4 flex flex-wrap items-center justify-between">
        {/* Hamburger Menu for small screens */}
        <button
          id="hamburger-menu"
          className="block md:hidden text-white focus:outline-none"
          onClick={() => handleOnClick()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {/* Logo */}

        <div className="text-center md:text-left w-full md:w-auto">
          <h1 className="text-xl font-bold text-white">Package Manager</h1>
        </div>

        {/* Desktop Navigation */}

        <NavItems navItems={headerNavItems} />
      </div>
    </header>
  );
}
