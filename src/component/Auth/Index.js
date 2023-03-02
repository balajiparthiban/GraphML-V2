import React, { useEffect, useState } from "react";
import Login from '../Login'
import Header from '../../component/Header'
import Dashboard from "../../pages/Dashboard/Dashboard";
// import firebaseConfig from '../../firebase'
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const Auth = () => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState('');

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case 'invalid-email':
                    case 'user-disabled':
                    case 'user-not-found':
                        setEmailError(err.message);
                        break;

                    case 'wrong-password':
                        setPasswordError(err.message)
                        break;
                }
            })
    }

    const handleSignup = () => {
        clearErrors();
        createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case 'email-already-in-use':
                    case 'invalid-email':
                        setEmailError(err.message);
                        break;

                    case 'weak-password':
                        setPasswordError(err.message)
                        break;
                }
            })
    }

    // const handleLogout = () => {
    //     signOut();
    // }

    const authListener = () => {
        onAuthStateChanged(user => {
            if (user) {
                clearInputs();
                setUser(user);
            }
            else {
                setUser('');
            }
        })
    }

    useEffect(() => {
        authListener();
    }, [])

    // const [index, setIndex] = useState(false);
    // const toggleIndex = () => {
    //     setIndex((prevState) => !prevState);
    // };

    return (
        // <>
        //     {!index ? <Login /> : <SignUp />}
        //     <p onClick={toggleIndex} className="d-none">
        //         {!index ? "New User? Click here" : "Already have an account"}
        //     </p>
        // </>

        <div>
            {user ?
                (<Dashboard />) :
                (<Login
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                />)
            }
        </div>

    )
}

export default Auth
