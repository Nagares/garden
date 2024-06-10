import {
  ChakraProvider,
  theme,
  ThemeConfig
} from "@chakra-ui/react"
import './App.css';
import './i18n'; 

import Navbar from "./components/NavBar";
import Content from "./components/Content";
function App() {

  // set theme configuration
  const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true,
  }
  theme.config = config;

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Content/>
    </ChakraProvider >
  );
}

export default App;
