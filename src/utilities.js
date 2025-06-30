const existingUsers = JSON.parse(localStorage.getItem('users')) || []

export const setUser = (signupData) => {
    existingUsers.push(signupData)
    localStorage.setItem('users', JSON.stringify(existingUsers))
}

export const findLoginUser = (loginData) => {
    const matchedUser = existingUsers.find((user) => user.email == loginData.email && user.password == loginData.password)
    console.log('matchedUser : ', matchedUser)
    if (matchedUser) {
        return { success: true, user: matchedUser };
    } else {
        return { success: false, error: "Invalid email or password" };
    }
}

export const findId = () => {
    const allIds = existingUsers.map(user => user.id);
    return allIds;
}