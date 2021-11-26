
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../Home/Products.css'
import useAuth from '../Login/useAuth';
const Navigation = () => {
    const { user, logout } = useAuth()
    return (

        <div className='container' >
            <Navbar bg="light" expand="lg container">
                <Container fluid>
                    <Navbar.Brand className='fs-1 text-secondary' href="#">By Cycle</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className=" my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to='/home' className='ms-5 fs-5 text-decoration-none' >Home</Link>
                            <Link to='/explore' className='ms-5 fs-5 text-decoration-none' >MoreProducts</Link>
                        </Nav>

                        <Navbar.Collapse className="d-flex justify-content-center ">
                            <Navbar.Text >
                                {
                                    user?.email ?
                                        <div className='me-3'> 
                                            <NavLink className='me-3 ' to="/dashboard">
                                                <button className='btn btn-outline-dark' >Dashboard</button>
                                            </NavLink>
                                            <button className='btn btn-outline-dark' onClick={logout}>Logout</button>
                                        </div>
                                        :
                                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                            <button className='btn btn-outline-dark' >Login</button>
                                        </NavLink>
                                }
                            
                                
                                </Navbar.Text>
                                Signed in as: <a>{user?.displayName}</a>
                        </Navbar.Collapse>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Navigation;





