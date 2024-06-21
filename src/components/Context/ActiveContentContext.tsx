import { createContext, useContext } from "react";
import { ActiveContentContextType } from "../Interfaces/ActiveContentContextType";

const defaultContextValue: ActiveContentContextType = {
  activeContent: <div>Default Content</div>,
  setActiveContent: () => {},
};

export const ActiveContentContext =
  createContext<ActiveContentContextType>(defaultContextValue);

export const useActiveContent = () => {
  const context = useContext(ActiveContentContext);
  if (!context) {
    throw new Error(
      "useActiveContent must be used within an ActiveContentProvider"
    );
  }
  return context;
};
