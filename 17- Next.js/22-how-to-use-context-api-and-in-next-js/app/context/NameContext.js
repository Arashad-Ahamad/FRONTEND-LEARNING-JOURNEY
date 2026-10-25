"use client"; 

import { createContext, useContext } from "react";

const NameContext = createContext(null);

export function NameProvider({ children }) {
  return (
    <NameContext.Provider value="Rahul">
      {children}
    </NameContext.Provider>
  );
}

export function useName() {
  return useContext(NameContext);
}