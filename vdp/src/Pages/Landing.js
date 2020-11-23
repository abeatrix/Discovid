import React from "react";
import { useRef, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";


if(!firebase.apps.length){
    firebase.initializeApp({

    })
}

function Landing() {

    const firestore = firebase.firestore();

    const mailingList = firestore.collection("mailinglist");

    const [formValue, setFormValue] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

    await mailingList.add({
        email: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    setFormValue("");

    };

    return (
    <>
        <form onSubmit={handleSubmit}>
        <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">✈️</button>
        </form>
    </>
    );
}

export default Landing;
