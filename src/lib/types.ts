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
