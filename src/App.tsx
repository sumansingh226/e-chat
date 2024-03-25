import { ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/HomePage/Home";
import { createTheme } from "@mui/material/styles";
import urls from "./global/constants/UrlConstants";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "MyriadPro_Light",
      "MyriadPro_Bold",
      "MyriadPro_Medium",
      "MyriadPro_Regular",
      "sans-serif",
      "Digital-7 Mono",
    ].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path={urls.landingViewPath} element={<Home />} />
          <Route path={urls.loginViewPath} element={<Home />} />
          <Route path={urls.registerViewPath} element={<Home />} />
          <Route path={urls.forgotPasswordViewPath} element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
