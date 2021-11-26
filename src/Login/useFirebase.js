import initializeFirebase from "./firebase.init";
import { useState } from "react";

import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useEffect } from "react";

initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //google
    const signInWithGoogle = (location, history) => {
        setIsLoading(true)

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                const user = result.user;

                saveUser(user.email, user.displayName, 'PUT')

                setAuthError('')

                // ...
            }).catch((error) => {
                setAuthError(error.message)

            })
            .finally(() => setIsLoading(false))

    }

    //newUser Create User 1
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setAuthError('')
                const newUser = { email, displayName: name }
                setUser(newUser)

                //saveUser to database
                saveUser(email, name, 'POST')



                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });


                history.replace('/')

                // ...
            })
            .catch((error) => {
                setAuthError(error.message)
                // ..
            })
            .finally(() => setIsLoading(false))
    }
    // location,history

    //oldUser 
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setAuthError('')

            })
            .catch((error) => {
                setAuthError(error.message)

            })
            .finally(() => setIsLoading(false))

    }

    //stateChange
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            // setIsLoading(true)

            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false)


        })
        return () => unsubscribed


    }, [])

    useEffect(() => {
        fetch(`https://infinite-hollows-46898.herokuapp.com/emailuser/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])


    //signOut Logout
    const logout = () => {
        setIsLoading(true)

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))

    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://infinite-hollows-46898.herokuapp.com/emailuser', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        registerUser,
        logout,
        loginUser,
        isLoading,
        authError,
        signInWithGoogle
    }
};

export default useFirebase;