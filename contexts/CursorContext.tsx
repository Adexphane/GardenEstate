// contexts/CursorContext.tsx
"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  RefObject,
} from "react";

interface CursorContextType {
  stickyElement: RefObject<HTMLElement | null> | null;
  setStickyElement: (element: RefObject<HTMLElement | null> | null) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [stickyElement, setStickyElement] =
    useState<RefObject<HTMLElement | null> | null>(null);

  return (
    <CursorContext.Provider value={{ stickyElement, setStickyElement }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
