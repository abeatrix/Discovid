import React from 'react';
import {Navbar, Form, FormControl, Nav, Button, Input, InputGroup} from 'react-bootstrap';
import "../../App.css"
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import 'firebase/auth';

const AdminMenu = () => {
    const auth = firebase.auth();
    const [user] = useAuthState(auth);

    return (
        <>
        <Navbar expand="lg" variant="dark" className="w-100 justify-content-between darknav">
            <Navbar.Brand href="https://discovid19.herokuapp.com/">
            <img
                alt="Discovid"
                src="https://i.ibb.co/j5PM4hV/discovid.png"
                width="300px"
                className="d-inline-block align-top menulogo"
            />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto darknavitem">
                    <div className="darknavitem">
                    Admin
                    </div>
                </Nav>
                <Form inline id="navbtns">
                <Button type="submit" variant="link" className="sign-out" id="navbtn" onClick={() => auth.signOut()}>Sign out</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        </>
    );
}

export default AdminMenu;
