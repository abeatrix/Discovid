import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import React from 'react'


const Signin = () => {

    const auth = firebase.auth();

    const [user] = useAuthState(auth);

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <>
            <button onClick={ signInWithGoogle }>Sign in with Google</button>
            <h1>hi</h1>
        </>
    )

}

export default Signin;
