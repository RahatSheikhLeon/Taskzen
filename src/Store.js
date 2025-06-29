

export function catagory () {
   return localStorage.getItem('catagory');
}



export function Store(signupData) {
// console.log('catagory name:', categoryName);
   return localStorage.setItem(signupData.password, JSON.stringify(signupData));
}