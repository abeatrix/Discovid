import React from "react";
import Header from "../Components/Landing/Header"
import NewsLetterForm from '../Components/Landing/NewsLetterForm'
import {FormContainer, FooterContainer} from "../Components/Landing/Styled"
import Features from "../Components/Landing/Features"
import Past from "../Components/Landing/Past"
import Footer from "../Components/Footer/index"

function Landing() {
    return (
    <>
        <Header/>
        <Past/>
        <NewsLetterForm/>
        <Features/>
        <Footer/>
    </>
    );
}

export default Landing;