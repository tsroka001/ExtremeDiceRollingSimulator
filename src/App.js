import Home from "./pages/Home";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const customTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9ccc65",
    },
    secondary: {
      main: "#b39ddb",
    },
  },
});

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
