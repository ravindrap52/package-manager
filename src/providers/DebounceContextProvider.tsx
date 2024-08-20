import { ReactNode, useState } from "react";

import { DebounceContext } from "@/context/debounceContext";

type DebounceContextProviderProps = {
  children: ReactNode;
};

export default function DebounceContextProvider({
  children,
}: DebounceContextProviderProps) {
  const [debouncedValue, setDebouncedValue] = useState<string>("");
  return (
    <DebounceContext.Provider value={{ debouncedValue, setDebouncedValue }}>
      {children}
    </DebounceContext.Provider>
  );
}
