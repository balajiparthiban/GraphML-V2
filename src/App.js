import React, { useEffect, useState } from "react";
import Login from './component/Login'
import Dashboard from './pages/Dashboard/Dashboard';
import firebase from './firebase'
import { useHistory } from "react-router-dom";
// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import './app.scss'

function App() {

  const history = useHistory();

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
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;

          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
        }
      });
    history.push('/')
  }

  const handleSignup = () => {
    clearErrors();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;

          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
        }
      });
  }

  const authListener = () => {
    firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (user) {
          clearInputs();
          setUser(user);
          
        } else {
          setUser('');
        }

     
      });
  }

  useEffect(() => {
    authListener();
  }, [])

  return (
    <div>
      {user ?
        <Dashboard /> :
        <Login
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
        />
      }
    </div>
  )
}

export default App
