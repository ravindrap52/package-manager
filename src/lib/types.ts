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

interface Package {
  name: string;
  stars: number;
}

export type Packages = {
  packages: Package[];
}