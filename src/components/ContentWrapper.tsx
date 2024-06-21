import { useActiveContent } from "./Context/ActiveContentContext";
import Navbar from "./NavBar";
import Footer from "./Footer";

function ContextWrapper() {
  const { activeContent, setActiveContent } = useActiveContent();

  return (
    <>
      <Navbar />
      {activeContent}
      <Footer />
    </>
  );
}

export default ContextWrapper;
