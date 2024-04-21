import { ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/HomePage/Home/Home";
import { createTheme } from "@mui/material/styles";
import urls from "./global/constants/UrlConstants";
import PrivateRoute from "./global/Routes/Private/PrivateRouteAuth";
import { AuthProvider } from "./global/Routes/Private/AuthProvider";
import ScreenShare from "./global/components/ScreenShare";

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
  const currentPath = window.location.href;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path={urls.landingViewPath} element={<Home />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/echat" element={<ScreenShare />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
