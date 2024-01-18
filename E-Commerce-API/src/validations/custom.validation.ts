const passwordStrong = (value: string, helpers: any) => {
    if(!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/)){
        return helpers.message('Password invalid');
    }
    return value;
}

/*
^                         Start anchor
(?=.*[A-Z].*[A-Z])        Ensure string has two uppercase letters.
(?=.*[!@#$&*])            Ensure string has one special case letter.
(?=.*[0-9].*[0-9])        Ensure string has two digits.
(?=.*[a-z].*[a-z].*[a-z]) Ensure string has three lowercase letters.
.{8}                      Ensure string is of length 8.
$                         End anchor.
*/
const passwordVeryStrong = (value: string, helpers: any) => {
    if(!value.match(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/)){
        return helpers.message('Password invalid');
    }
    return value;
}

/* only match yyyy-mm-dd */
const dateFormat =  (value: string, helpers: any) => {
    if(!value.match(/^(\d{4}-\d{2}-\d{2})$/)){
        return helpers.message(`Incorrect format allowed yyyy-mm-dd`);
    }
    return value;
}



const objectId =  (value: string, helpers: any) => {
    if(!value.match(/^[0-9a-fA-F]{24}$/)){
        return helpers.message(`ID is non-Objectid`);
    }
    return value;
}

const slugFriendly =  (value: string, helpers: any) => {
    if(!value.match(/^[a-z0-9\-]+$/)){
        return helpers.message(`Slug contain only letters, numbers, and hyphens`);
    }
    return value;
}

export {
    passwordStrong,
    passwordVeryStrong,
    objectId,
    dateFormat,
    slugFriendly
}