import React, { createContext, useContext } from "react";

interface PageManagerContextProps {}

const PageManagerContext = createContext<PageManagerContextProps | undefined>(
  undefined
);

export const PageManagerProvider = ({ children }: any) => {
  return (
    <PageManagerContext.Provider value={{}}>
      {children}
    </PageManagerContext.Provider>
  );
};

export const usePageManagerContext = () => {
  const context = useContext(PageManagerContext);
  if (!context) {
    throw new Error(
      "usePageManagerContext must be used within a PageManagerProvider"
    );
  }
  return context;
};
