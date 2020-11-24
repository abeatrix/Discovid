import React from 'react';
import {Navbar, Form, FormControl, Nav, Button} from 'react-bootstrap';
import {HeaderH1} from "./Styled";

const Menu = () => {
    return (  
        <>
        <Navbar bg="dark" expand="lg" className="w-100 justify-content-between">
            <Navbar.Brand href="#home">
                <HeaderH1>logo</HeaderH1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                <Nav.Link href="#home">Events</Nav.Link>
                <Nav.Link href="#link">Explore</Nav.Link>
                </Nav>
                <Form inline className="mr-auto">
                <FormControl type="text" placeholder="Search Events" className="mr-sm-2" />
                </Form>
                <Form inline>
                <FormControl type="text" placeholder="Sign Up" className="mr-sm-2" />
                <Button type="submit">Sign Up</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        </>
    );
}
 
export default Menu;