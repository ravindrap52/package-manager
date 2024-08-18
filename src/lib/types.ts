import { Package } from "@/lib/interface";

export type navItemProps = {
  navItems: {
    name: string;
    path: string;
    id: number;
  }[];
};

export type headerProps = {
  handleOnClick: () => void;
};

export type Packages = {
  packages: Package[];
}

export type Order = 'asc' | 'desc';

export type tableBodyProps = {
  rowData: Package[]
}