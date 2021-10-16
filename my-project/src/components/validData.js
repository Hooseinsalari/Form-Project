export const validData = (data) => {

    const errors = {};

    if(!data.name.trim()){
        errors.name = "Name is required!"
    } else{
        delete errors.name
    }

    if(!data.email){
        errors.email = "Email is required!"
    } else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "Email addres is invalid"
    } else{
        delete errors.email
    }

    if(!data.password){
        errors.password = "Password is requires"
    } else if(data.password.length < 6) {
        errors.password = "Password need to be 6 character or more"
    } else {
        delete errors.password
    }

    if(!data.confirmPassword){
        errors.confirmPassword = "Confirm the password."
    } else if(data.confirmPassword !== data.password){
        errors.confirmPassword ="Password do not match!"
    } else{
        delete errors.confirmPassword
    }

    if(!data.isAccept){
        errors.isAccept = "Please accept our regulatio!"
    } else{
        delete errors.isAccept
    }

    return errors;
}