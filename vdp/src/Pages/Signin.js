
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
            <h1>Sign in / Sign up</h1>
            <button onClick={ signInWithGoogle }>Sign in / Sign up with Google</button>
        </>
    )

}

export default Signin;
