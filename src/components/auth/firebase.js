import fire from "../auth/firebaseConfig";

export const getLogin = (email,password) => {
    return fire.auth().signInWithEmailAndPassword(email, password)
}

export const getSignUp = (email,password) =>{
    return fire.auth().createUserWithEmailAndPassword(email, password)
}

export const handleLogout = () =>{
   return fire.auth().signOut()
}

export const authListener = () => {
    fire.auth().onAuthStateChanged((user) => { 
        // console.log("user : ", user);
        if(user)
        return 1;
        else return 0;
      });
}

export const doResetPassword = (email) => {
    return fire.auth().sendPasswordResetEmail(email)
}
