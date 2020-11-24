import React from 'react';
import {Navbar, Form, FormControl, Nav, Button, Input, InputGroup} from 'react-bootstrap';
import {HeaderH1} from "./Styled";
import { BsSearch } from 'react-icons/bs';
import "../../App.css"

const Menu = () => {
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
                <Button type="submit" variant="link" id="navbtn">Sign In</Button>
                <Button type="submit" variant="light">Sign Up</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        </>
    );
}

export default Menu;
