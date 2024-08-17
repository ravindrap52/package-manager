import { Link } from "react-router-dom";

import { navItemProps } from "@/lib/types";

export default function NavItems({ navItems }: navItemProps) {
  return (
    <nav className="hidden md:flex space-x-4" data-testid="navItems">
      {navItems.map(({ id, name, path }) => (
        <Link to={path} className="text-gray-700" key={id}>
          {name}
        </Link>
      ))}
    </nav>
  );
}
