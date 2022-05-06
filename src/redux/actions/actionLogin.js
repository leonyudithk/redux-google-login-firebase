import { createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile } from "firebase/auth"
import { google } from "../../firebase/firebaseConfig"
import { typeslogin } from "../types/types"


export const logout =()=>{
    return{
        type: typeslogin.logout
    }
}

export const loginSync =(user, pass)=>{
    return{
            type: typeslogin.login,
            payload: { user, pass}
    }
}

//---------------------------//
export const loginGoogle = ()=>{
    return (dispatch)=>{
        const auth = getAuth()
        signInWithPopup(auth, google)
       .then(({user})=>{
            console.log(user, 'Usuario autorizado')
    })
        .catch(error=>{
            console.warn(error, 'No autorizado')
        })
    }
}

export const registerAsync =(email, pass, nombre)=>{
    return(dispatch)=>{
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, pass)
        .then(async({user})=>{
            console.log(user)
            await updateProfile(auth.currentUser, {displayName: nombre})
            dispatch(registerSync(email, pass, nombre))
            console.log('Usuario Registrado de manera exitosa')
        })
        .catch(error=>{
            console.warn(error, 'No autorizado')
        })
    }
           
    }
   


export const registerSync =(email, pass, name)=>{
    return{
        type: typeslogin.register,
        payload: {
            email, pass, name
        }
    }
}