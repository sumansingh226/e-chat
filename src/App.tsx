import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/HomePage/Home";

// Define your URLs
const urls = {
  landingViewPath: "/",
  loginViewPath: "/login",
  registerViewPath: "/register",
  forgotPasswordViewPath: "/forgot-password",
  changePasswordViewPath: "/change-password",
};

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={urls.landingViewPath} element={<Home />} />
          <Route path={urls.loginViewPath} element={<Home />} />
          <Route path={urls.registerViewPath} element={<Home />} />
          <Route path={urls.forgotPasswordViewPath} element={<Home />} />
          <Route path={urls.changePasswordViewPath} element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
