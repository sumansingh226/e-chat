class stringsConstnat extends String {
    live = false;
    url_dev = "http://localhost:5004";
    url_test = "http://localhost:5005";
    url_live = "http://localhost:5006";


    LOGIN = "login";
    REGISTER = "register";
    FORGOTPASSWORD = "forgot-password";
    CHANGE_PASSWORD = "changepwd";
    applicationJSON = { "Content-Type": "application/json" };
    fileJSON = { "Content-Type": "text/csv" };
    multipartForm = {};
    regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    regexPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,100}$/;
}

const strings = new stringsConstnat();
export default strings;
