import React from 'react';
import {Navbar, Form, FormControl, Nav, Button, Input, InputGroup} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import {HeaderH1} from "./Styled";
import { BsSearch } from 'react-icons/bs';
import "../../App.css"
import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';


const Menu = () => {

    const [modalShow, setModalShow] = React.useState(false);

    const auth = firebase.auth();

    const [user] = useAuthState(auth);

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }


    return (
        <>
        <Navbar expand="lg" variant="dark" className="w-100 justify-content-between darknav">
            <Navbar.Brand href="https://discovid19.herokuapp.com/">
            <img
                alt="Discovid"
                src="https://i.ibb.co/j5PM4hV/discovid.png"
                width="300px"
                className="d-inline-block align-top menulogo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto darknav">
                    <div className="alinks">
                    <Nav.Link className="alinks" href="https://discovid19.herokuapp.com/dashboard">Events</Nav.Link>
                    </div>
                    <Nav.Link href="https://discovid19.herokuapp.com/dashboard">Explore</Nav.Link>
                </Nav>
                <Form inline id="navbtns">
                    <Button variant="link" id="navbtn" onClick={ signInWithGoogle }>Sign In</Button>
                    <Button variant="light" onClick={ signInWithGoogle }>Sign Up</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        </>
    );
}

export default Menu;
