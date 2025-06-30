
export const setUser = (signupData) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || []
    existingUsers.push(signupData)
    localStorage.setItem('users', JSON.stringify(existingUsers))
}

export const findLoginUser = (loginData) => {
    const sevedUsers = JSON.parse(localStorage.getItem('users')) 
    const matchedUser = sevedUsers.find((user) => user.email == loginData.email && user.password == loginData.password)

     if (matchedUser) {
        return { success: true, user: matchedUser };
    } else {
        return { success: false, error: "Invalid email or password" };
    }
}