import { Link } from "react-router-dom";

import { NavItemProps } from "@/lib/types";

export default function NavItemsAsList({
  navItems,
  handleOnClick,
}: NavItemProps) {
  return (
    <ul className="mt-8 space-y-6" data-testid="navItemsAsList">
      {navItems.map(({ id, name, path }) => (
        <li key={id}>
          <Link to={path} className="text-gray-700" onClick={handleOnClick}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
