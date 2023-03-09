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


export const isNotEmpty = (value) => {
    if(typeof value === "string"){
        return value.trim().length == 1;
    }
    return false;
}