import { Link } from "react-router-dom";

import { navItemProps } from "@/lib/types";

export default function NavItemsAsList({ navItems }: navItemProps) {
  return (
      <ul className="mt-8 space-y-6" data-testid="navItemsAsList">
        {navItems.map(({ id, name, path }) => (
          <li key={id}>
            <Link to={path} className="text-gray-700">
              {name}
            </Link>
          </li>
        ))}
      </ul>
  );
}
