import React from "react";
import { useRef, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/auth";
import {FormContainer, FormHeading, HeaderH2} from "../Landing/Styled"
import Confirmation from "../Landing/Confirmation"
import {Form, FormControl} from "react-bootstrap";
import "../../App.css"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


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

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

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

    const classes = useStyles();

    return (
        <FormContainer>
            {!confirmation ?
            <form onSubmit={handleSubmit}>
                <FormHeading>
                    <HeaderH2 className="main-font">Keep me updated on fun shit</HeaderH2>
                    <p>Be the first one to learn about new events, exclusive interviews with artists, chances to meet your favorite artist and more.</p>
                </FormHeading>
                <TextField
                    style={{marginRight: "20px"}}
                    variant="outlined"
                    margin="normal"
                    required
                    id="name"
                    label="Full Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <TextField
                    style={{marginRight: "20px"}}
                    variant="outlined"
                    margin="normal"
                    required
                    id="email"
                    label="Email Address"
                    type="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Notify Me!
                </Button>

                <FormHeading>
                    <small className="mt-5">We got your back, we won't send you spam or share your information with anyone</small>
                </FormHeading>
            </form> : <Confirmation/>

            }
        </FormContainer>
    );
}

export default NewsLetterForm;
