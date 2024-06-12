import { ChakraProvider, theme, ThemeConfig } from "@chakra-ui/react";
import "./App.css";
import "./i18n";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacts from "./components/Contact";
import AboutUs from "./components/AboutUs";
import ServicesPage from "./components/ServicesPage";
import Navbar from "./components/NavBar";
import Home from "./components/Content";
import Footer from "./components/Footer";

function App() {
  // set theme configuration
  const config: ThemeConfig = {
    initialColorMode: "system",
    useSystemColorMode: true,
  };
  theme.config = config;

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
