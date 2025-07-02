const existingUsers = JSON.parse(localStorage.getItem('users')) || []

export const setUser = (signupData) => {
    existingUsers.push(signupData)
    localStorage.setItem('users', JSON.stringify(existingUsers))
}

export const findLoginUser = (loginData) => {
    const matchedUser = existingUsers.find((user) => user.email == loginData.email && user.password == loginData.password)

    if (matchedUser) {
        return { success: true, user: matchedUser };
    } else {
        return { success: false, error: "Invalid email or password" };
    }
}

export const setCategorices = (category) => {
    const existingCategory = JSON.parse(localStorage.getItem('categorys')) || []
    existingCategory.push(category)
    localStorage.setItem('categorys', JSON.stringify(existingCategory))
}

export const getCategories = ( userId = null ) => {
    let categories = JSON.parse(localStorage.getItem('categorys')) ?? [];

    if( userId === null ) {
        return categories;
    }

    return categories.filter( category => category.userId === userId );
}

export const getLoggedInUser = () => {
    return JSON.parse(localStorage.getItem('loggedInUser')) ?? {};
}
