import { createContext, useState, useEffect } from "react";

import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase-config"


export const UserContext = createContext()

export function UserContextProvider(props) {



    const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)
    const signIn = (email, pwd) =>signInWithEmailAndPassword(auth, email, pwd)

    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLodingData] = useState(true);

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) =>{
            setCurrentUser(currentUser)
            setLodingData(false)
        })
        return unsubcribe;
    },[])

    //MODALS
    const [modalState, setModalState] = useState({
        signUpModal: false,
        signInModal: false
    })

    const toggleModals = modal => {
        if (modal === "signIn") {
            setModalState({
                signUpModal: false,
                signInModal: true
            })
        }
        if (modal === "signUp") {
            setModalState({
                signInModal: false,
                signUpModal: true
            })
        }
        if (modal === "close") {
            setModalState({
                signInModal: false,
                signUpModal: false
            })
        }
    }
        

    return (
        <UserContext.Provider value={{ modalState, toggleModals, signUp, currentUser, signIn }}>
            {!loadingData && props.children}
        </UserContext.Provider>
    )
}
