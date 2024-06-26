import { useActiveContent } from "./Context/ActiveContentContext";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";
import { NavbarHeightProvider } from "./Context/NavbarHeightContext";

function ContextWrapper() {
  const { activeContent } = useActiveContent();

  return (
    <>
      <NavbarHeightProvider>
        <Navbar />
        {activeContent}
        <Footer />
      </NavbarHeightProvider>
    </>
  );
}

export default ContextWrapper;
