import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface ActiveContentContextType {
  activeContent: JSX.Element;
  setActiveContent: Dispatch<SetStateAction<JSX.Element>>;
}


const defaultContextValue: ActiveContentContextType = {
  activeContent: <div>Default Content</div>,
  setActiveContent: () => {},
};


export const ActiveContentContext = createContext<ActiveContentContextType>(defaultContextValue);


export const useActiveContent = () => {
  const context = useContext(ActiveContentContext);
  if (!context) {
    throw new Error("useActiveContent must be used within an ActiveContentProvider");
  }
  return context;
};