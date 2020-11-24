import React from "react";
import { useRef, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/auth";
import {FormContainer, FormHeading, HeaderH2} from "../Landing/Styled"
import Confirmation from "../Landing/Confirmation"
import {Form, FormControl, Button} from "react-bootstrap";
import "../../App.css"


if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: process.env.REACT_APP_FB_APIKey,
        authDomain: process.env.REACT_APP_FB_AUTHD,
        databaseURL: process.env.REACT_APP_FB_DBURL,
        projectId: "virtualdanceparty-ff346",
        storageBucket: process.env.REACT_APP_FB_SB,
        messagingSenderId: process.env.REACT_APP_FB_MSID,
        appId: process.env.REACT_APP_FB_APPID,
        measurementId: "G-LXHE6CTR7G"
    })
}

function NewsLetterForm() {

    const firestore = firebase.firestore();

    const mailingList = firestore.collection("mailinglist");

    const [firstName, setFirstName] = useState("");
    const [formValue, setFormValue] = useState("");

    const [confirmation, setConfirmation] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

    await mailingList.add({
        firstName: firstName,
        email: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    setConfirmation(true);

    setFormValue("");

    };

    return (
        <FormContainer>
            <FormHeading>
                <HeaderH2>Keep me updated on fun shit</HeaderH2>
                <small>Be the first one to learn about new events, exclusive interviews with artists, chances to meet your favorite artist and more.</small>
            </FormHeading>
            {!confirmation ?
            <form onSubmit={handleSubmit}>
                <input
                    className="mr-sm-2"
                    placeholder="Full Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    className="mr-sm-2"
                    placeholder="Email"
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                />
                <button type="submit">✈️</button>
            </form> : <Confirmation/>
            }
            <FormHeading>
                <small>We got your back, we won't send you spam or share your information with anyone</small>
            </FormHeading>
        </FormContainer>
    );
}

export default NewsLetterForm;
