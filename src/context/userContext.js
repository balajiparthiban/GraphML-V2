import { createContext, useState, useContext, useEffect } from 'react'
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, displayEmail } from 'firebase/auth'
import { auth } from '../firebase'


export const UserContext = createContext({})

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState()
    const [error, setError] = useState("")


    const getUserName = (e) => {
        let displayName = '';
        if (e.displayName) {
            displayName = e.displayName;
        } else {
            const emailportion = e.email.split('.');
            const firstName = emailportion[0];
            const lastName = emailportion[1].split('@')[0];
            displayName = `${firstName} ${lastName}`;
        }
        return { displayName };
    }


    useEffect(() => {
        setLoading(true)
        const unSubscribe = onAuthStateChanged(auth, res => {
            res ? setUser(getUserName(res)) : setUser(null);
            setError("")
            setLoading(false);
        });

        return unSubscribe;

    }, [])


    const registerUser = (email, name, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                return updateProfile(auth.currentUser, {
                    displayEmail: name
                })
            })
            .then((res) => console.log(res))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false))
    }

    const signInUser = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => console.log(res))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false))
    }

    const logoutUser = () => {
        signOut(auth)
    }

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    // setTimeout(()=> {
    //     this.signOut();
    //   }, token.expirationTime);

    const contextValue = {
        user,
        loading,
        error,
        registerUser,
        signInUser,
        logoutUser,
        forgotPassword,
        updateProfile
    }

    return (
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    );
};