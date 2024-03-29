import React from "react";
import { useLocation } from "react-router-dom";
import VoiceChat from "../../global/components/VoiceChat";
import strings from "../../global/constants/Strings";
import urls from "../../global/constants/UrlConstants";

const Home = () => {
  const location = useLocation();

  const Login = () => {
    return <div>Login Component11</div>;
  };

  const Register = () => {
    return <div>Register Component</div>;
  };

  const ForgotPassword = () => {
    return <div>Forgot Password Component</div>;
  };

  const ResetPassword = () => {
    return <div>Reset Password Component</div>;
  };

  const getComponentBasedOnURL = () => {
    const currentPath = window.location.pathname;

    console.log("currentPath", currentPath);

    switch (currentPath) {
      case strings.LOGIN: {
        return <VoiceChat />;
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
        return <VoiceChat />;
      }
    }
  };

  //   const isAuthenticated = true; // Assuming it's false for this example

  //   if (!isAuthenticated) {
  //     // history.push(urls.landingViewPath);
  //     return null;
  //   }

  return getComponentBasedOnURL();
};

export default Home;
