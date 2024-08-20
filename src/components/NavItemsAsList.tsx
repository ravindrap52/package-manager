import { Link, useLocation } from "react-router-dom";

import { NavItemProps } from "@/lib/types";

export default function NavItemsAsList({
  navItems,
  handleOnClick,
  cssClass,
}: NavItemProps) {
  const location = useLocation();
  
  return (
    <ul className="mt-8 space-y-2" data-testid="navItemsAsList">
      {navItems.map(({ id, name, path }) => (
        <li key={id}>
          <Link to={path} className={`block p-2  rounded hover:bg-teal-200 ${cssClass} ${location.pathname === path ? 'bg-teal-100': null }`} onClick={handleOnClick}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
