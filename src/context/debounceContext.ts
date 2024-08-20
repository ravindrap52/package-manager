import { createContext, useContext } from "react";

import { DebounceContextType } from "@/lib/interface";

export const DebounceContext = createContext<DebounceContextType | undefined>(undefined);

export function useDebounceContext() {
  const context = useContext(DebounceContext);
  if (!context) {
    throw new Error('useDebounceContext must be used with a DebounceContextProvider');
  }
  return context;
}
