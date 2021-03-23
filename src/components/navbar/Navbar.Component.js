import React from "react";
import * as ReactBootstrap from "react-bootstrap";



const Navbar = () => {
    return(
        <ReactBootstrap.Navbar className="bg-primary" style={{ height:90 , zIndex:1000}}>
            <ReactBootstrap.Navbar.Brand href="/" style={{ marginLeft:50, fontSize:30 , color:"white"}}>Todos</ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Navbar.Toggle controls="basic-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav " >
                    <ReactBootstrap.Nav className="ml-auto justify-content-end">
                    <ReactBootstrap.Nav.Link href="/" className="text-white">Home</ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="/contact" className="text-white">Contact</ReactBootstrap.Nav.Link>
    
                    </ReactBootstrap.Nav>
                   
                </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
    );
}

export default Navbar;