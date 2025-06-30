export function SignupValidation(signupData) {
    let error = {};
    let storageRootValidation = true; 

    const username_pattern = /^[a-zA-Z0-9_]{3,}$/;
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{4,}$/;

    // Name Validation
    if (signupData?.username === "") {
        error.username = "Name should not be empty";
        storageRootValidation = false;
    } else if (!username_pattern.test(signupData?.username)) {
        error.username = "Name didn't match";
        storageRootValidation = false;
    } else {
        error.username = "";
    }

    // Email Validation
    if (signupData?.email === "") {
        error.email = "Email should not be empty";
        storageRootValidation = false;
    } else if (!email_pattern.test(signupData?.email)) {
        error.email = "Email didn't match";
        storageRootValidation = false;
    } else {
        error.email = "";
    }

    // Password Validation
    if (signupData?.password === "") {
        error.password = "Password should not be empty";
        storageRootValidation = false;
    } else if (!password_pattern.test(signupData?.password)) {
        error.password = "Password didn't match";
        storageRootValidation = false;
    } else {
        error.password = "";
    }

    return { error, storageRootValidation };
}
