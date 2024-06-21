import { ChakraProvider, theme, ThemeConfig } from "@chakra-ui/react";
import "./App.css";
import "./i18n";

import Context from "./components/Context/Context";


function App() {
  const config: ThemeConfig = {
    initialColorMode: "system",
    useSystemColorMode: true,
  };
  theme.config = config;

  return (
    <ChakraProvider theme={theme}>
      <Context />
    </ChakraProvider>
  );
}

export default App;
