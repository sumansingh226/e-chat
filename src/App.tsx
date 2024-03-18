import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Dummy components for routes
const LandingPage = () => <div>Landing Page</div>;
const Register = () => <div>Register Page</div>;

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
          <Route path={urls.landingViewPath} element={<LandingPage />} />
          <Route path={urls.loginViewPath} element={<LandingPage />} />
          <Route path={urls.registerViewPath} element={<Register />} />
          <Route path={urls.forgotPasswordViewPath} element={<LandingPage />} />
          <Route path={urls.changePasswordViewPath} element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
