
export function loginValidation(loginData) {
    let error = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{4,}$/;

    // Email Validation
    if (loginData.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(loginData.email)) {
        error.email = "Email didn't match";
    } else {
        error.email = "";
    }

    // Password Validation
    if (loginData.password === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(loginData.password)) {
        error.password = "Password didn't match";
    } else {
        error.password = "";
    }

    return error;
}