import React from "react";
import { useLocation } from "react-router-dom";
import strings from "../../global/constants/Strings";
import urls from "../../global/constants/UrlConstants";
import Login from "./Login/Login";

const Home = () => {
  const location = useLocation();

  const getComponentBasedOnURL = () => {
    const currentPath = window.location.pathname;
    console.log("currentPath", currentPath);

    switch (currentPath) {
      case strings.LOGIN: {
        return <Login />;
      }
      case strings.REGISTER: {
        return <Register />;
      }
      case strings.FORGOTPASSWORD: {
        return <ForgotPassword />;
      }
      case strings.CHANGE_PASSWORD: {
        return <ResetPassword />;
      }
      default: {
        return <Login />;
      }
    }
  };

  return getComponentBasedOnURL();
};

export default Home;
