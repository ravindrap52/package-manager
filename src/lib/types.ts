import { ReactNode } from "react";

import { Package } from "@/lib/interface";

export type NavItemProps = {
  navItems: {
    name: string;
    path: string;
    id: number;
  }[];
  handleOnClick?: () => void;
};

export type HeaderProps = {
  handleOnClick: () => void;
};

export type Packages = {
  packages: Package[];
}

export type Order = 'asc' | 'desc';

export type PackageTableChildProps = {
  packages: Package[];
}

export type TableBodyProps = {
  rowData: Package[];
  fetching: boolean;
}

export type HeaderContextProviderProps = {
  children: ReactNode;
};
