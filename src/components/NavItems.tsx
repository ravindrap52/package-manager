import { Link } from "react-router-dom";

import { NavItemProps } from "@/lib/types";

export default function NavItems({ navItems }: NavItemProps) {
  return (
    <nav className="flex-grow flex justify-center lg:justify-end md:justify-end sm:justify-center space-x-4 w-full md:w-auto mt-4 md:mt-0" data-testid="navItems">
      {navItems.map(({ id, name, path }) => (
        <Link to={path} className="hover:text-teal-200 text-white" key={id}>
          {name}
        </Link>
      ))}
    </nav>
  );
}
