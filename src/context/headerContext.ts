import { createContext, useContext } from "react";

import { ContextHeader } from "@/lib/interface";

export const HeaderContext = createContext<ContextHeader | undefined>(undefined);

export function useHeaderContext() {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error('useHeaderContext must be used with a HeaderContextProvider');
  }
  return context;
}