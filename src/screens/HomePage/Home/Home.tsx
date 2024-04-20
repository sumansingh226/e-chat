import { useLocation } from "react-router-dom";
import strings from "../../../global/constants/Strings";
import Registrartion from "../Register/Registrartion";
import ResetPassword from "../ResetPassword/ResetPassword";
import Login from "../Login/Login";
import ForgotPassword from "../../ForgotPassword/ForgotPassword";
import urls from "../../../global/constants/UrlConstants";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  const getComponentBasedOnURL = () => {
    console.log("location", location);

    switch ("") {
      case urls.loginViewPath:
        return <Login />;
      case strings.REGISTER:
        return <Registrartion />;
      case strings.FORGOTPASSWORD:
        return <ForgotPassword />;
      case strings.CHANGE_PASSWORD:
        return <ResetPassword />;
      default:
        return <Login />;
    }
  };

  return getComponentBasedOnURL();
};

export default Home;
