import { useState } from "react";

import { HeaderContext } from "@/context/headerContext";

import { HeaderContextProviderProps } from "@/lib/types";

export default function HeaderContextProvider({
  children,
}: HeaderContextProviderProps) {
  const [order, setOrder] = useState<string>("asc");
  const [orderBy, setOrderBy] = useState<string>("stars");
  return (
    <HeaderContext.Provider value={{ order, setOrder, orderBy, setOrderBy }}>
      {children}
    </HeaderContext.Provider>
  );
}
