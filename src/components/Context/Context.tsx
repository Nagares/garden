import Content from "../Content";
import { useState } from "react";
import { ActiveContentContext } from "./ActiveContentContext";
import ContextWrapper from "../ContentWrapper";

function Context() {
  const [activeContent, setActiveContent] = useState<JSX.Element>(<Content />);
  return (
    <ActiveContentContext.Provider value={{ activeContent, setActiveContent }}>
      <ContextWrapper />
    </ActiveContentContext.Provider>
  );
}

export default Context;
