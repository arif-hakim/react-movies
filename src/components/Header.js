import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './pages/styles/header.css'

const Header = (props) => {

    useEffect(() => {
    }, [])

    return (
        <Navbar variant="dark" style={{ background: '#000' }}>
            <Navbar.Brand href="/">
                <span className="text-danger font-weight-bold">NETFLIX</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="w-100">
                    <Nav.Link className="text-white" href="#/">Home</Nav.Link>
                    <Nav.Link className="text-white" href="#/tv-shows">TV Shows</Nav.Link>
                    <Nav.Link className="text-white" href="#/movies">Movies</Nav.Link>
                    <Nav.Link className="text-white" href="#/latest">Latest</Nav.Link>
                    <Nav.Link className="text-white" href="#/my-list">My List</Nav.Link>
                    <Nav.Link className="text-white ml-auto mr-4 " href="#/login">Login</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Header;
