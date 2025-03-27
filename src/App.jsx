import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globals";
import AppLayout from "./components/app_layout.component";
import PreloaderAndAppLayout from "./components/preloader_and_app_layout.component";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <PreloaderAndAppLayout /> */}
      <AppLayout />
    </ThemeProvider>
  );
}

export default App;
