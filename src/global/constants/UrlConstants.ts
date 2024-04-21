class UrlConstants {
    // Set this to true for live environment, false for local environment
    live = false;

    apiUrl = this.live ? "https://live.api.com" : "http://localhost:5000";

    // Paths for different views
    landingViewPath = "/";
    loginViewPath = "/login";
    registerViewPath = "/register";
    forgotPasswordViewPath = "/forgot-password";
    changePasswordViewPath = "/change-password";
    signup = "/signup";

    // Additional URLs for echat
    echatBasePath = "/echat";
    chatRoomsPath = this.echatBasePath + "/rooms";
    userProfilePath = this.echatBasePath + "/profile";
    // Add more URLs as needed
}

const urls = new UrlConstants();

export default urls;
