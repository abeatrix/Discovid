import React from "react";
import Header from "../Components/Landing/Header"
import NewsLetterForm from '../Components/Landing/NewsLetterForm'
import {FormContainer, FooterContainer} from "../Components/Landing/Styled"
import Features from "../Components/Landing/Features"
import Past from "../Components/Landing/Past"
import Footer from "../Components/Footer/index"


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

function Landing() {
    return (
    <>
        <Header/>
        <NewsLetterForm/>
        <Past/>
        <FormContainer>
            {!confirmation ?
            <form onSubmit={handleSubmit}>
            <input
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
                />
            <button type="submit">✈️</button>
            </form> : <h1>Hi</h1>
            }
        </FormContainer>
        <Features/>
        <Footer/>
    </>
    );
}

export default Landing;
