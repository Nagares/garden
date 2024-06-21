import {Dispatch, SetStateAction } from "react";

export
interface ActiveContentContextType {
    activeContent: JSX.Element;
    setActiveContent: Dispatch<SetStateAction<JSX.Element>>;
  }
  