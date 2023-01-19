import validator from "validator"
import { createSelector } from "reselect";


export const emailValid = (emailId) => {
    let i=emailId.length-1;
    while(emailId[i] === " " && i>=0)
    {
        emailId = emailId.substring(0, emailId.length - 1);
        // console.log(emailId);
        i--;
    } 
    if (validator.isEmail(emailId))
        return '';
    else return "Invalid Email-Id";
}

export const textValid = (text) => {
    let isValid = true;
    for(let i=0; i<text.length;i++)
    {
        if(!text[i].match(/^[a-zA-Z]+$/) && text[i]!==" ")
        isValid=false; 
    }
    if (isValid)
    return '';
    else return "Invalid Name";
}

export const mobileValid = (mobile) => {
    console.log("mobile-length: ", mobile.length)
    if (mobile.length>11)
        return '';
    else return "Invalid Mobile Number";
}
export const passwrodValid = (password) => {
    if (password.length > 5)
        return '';
    else return "Password length must be atleast 6";
}


const mapStateToProps = (state) => {
    return {
        fresherSignUp: state.fresherSignUp,
    };
};
