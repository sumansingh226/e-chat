class stringsConstnat extends String {
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
