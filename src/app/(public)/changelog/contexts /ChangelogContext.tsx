"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ChangelogContextType = {
  expandAll: boolean;
  toggleExpandAll: () => void;
};

const ChangelogContext = createContext<ChangelogContextType | undefined>(
  undefined
);

export function ChangelogProvider({ children }: { children: ReactNode }) {
  const [expandAll, setExpandAll] = useState<boolean>(false);

  const toggleExpandAll = () => {
    setExpandAll(!expandAll);
  };

  return (
    <>
      <ChangelogContext.Provider value={{ expandAll, toggleExpandAll }}>
        {children}
      </ChangelogContext.Provider>
    </>
  );
}

export function useChangelog() {
  const context = useContext(ChangelogContext);
  if (!context) {
    throw new Error(
      "useChangelog deve ser usado dentro de um ChangelogProvider"
    );
  }
  return context;
}
