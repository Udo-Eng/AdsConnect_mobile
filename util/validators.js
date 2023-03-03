export const emailIsValid = (email) => {
    if(typeof email === "string"){
        return email.trim().includes("@");
    }
}


export const passwordIsValid = (password) => {
    if(typeof password === "string"){
        return password.trim().length > 6;
    }
}