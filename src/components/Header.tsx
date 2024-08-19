
import NavItems from "./NavItems";

import { headerNavItems } from "@/lib/navItems";
import { HeaderProps } from "@/lib/types";

export default function Header({ handleOnClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center" data-testid="header">
      <div className="md:hidden flex items-center">
        <button
          id="hamburger-menu"
          className="text-gray-600 focus:outline-none mr-2"
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
      </div>

      {/* Logo */}

      <div className="text-xl font-bold text-gray-700 flex-grow text-center md:text-left">
        Package Manager
      </div>

      {/* Desktop Navigation */}
     
        <NavItems navItems={headerNavItems} />
    </header>
  );
}
