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
    switch ("") {
      case urls.loginViewPath:
        return <Login />;
      case urls.registerViewPath:
        return <Registrartion />;
      case urls.forgotPasswordViewPath:
        return <ForgotPassword />;
      case urls.changePasswordViewPath:
        return <ResetPassword />;
      default:
        return <Login />;
    }
  };

  return getComponentBasedOnURL();
};

export default Home;
