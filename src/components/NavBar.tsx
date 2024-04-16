import React, { useEffect, useRef, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { NavLink, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button'
import { Envelope, Facebook, Instagram, TwitterX, Whatsapp, X, Youtube } from 'react-bootstrap-icons'
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube, FaSquareInstagram, FaSquareXTwitter, FaSquareWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import logo from '../assets/Logo1.jpg'



const NavBar: React.FC = () => {
    const [show, setShow] = useState<Boolean>(false);
    const [adminData, setAdminData] = useState<any>({});


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleHomeClick = () => {
        handleClose();
        if (window.location.pathname !== "/") {
            window.location.href = "/";
        } else {
            window.location.reload();
        }
    };

    useEffect(() => {

    }, []);



    return (
        <>
            {['sm'].map((expand) => (
                <Navbar expand={expand} className="bg-body-tertiary mb-1 fixed-top card m-1" sticky='top'>
                    <Container className='rounded' style={{ background: '#f8f8f8' }} fluid>
                        <Image src={process.env.PUBLIC_URL + 'icons8-tools-ios-17-filled-32.png'} />
                        <Navbar.Brand href="#" className='ms-2 '>
                            <div className='flex flex-column m-0 p-0'><p className='p-0 m-0'>Technicianwale</p></div>
                        </Navbar.Brand>
                        <Navbar.Toggle className='shadow-none border-0' aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleShow} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            show={show} onHide={handleClose}
                        >
                            <Offcanvas.Header className='mt-1 mx-2' closeButton>
                                <Image src={process.env.PUBLIC_URL + 'icons8-tools-ios-17-filled-32.png'} />
                                <Offcanvas.Title className='justify-content-center' id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    TechnicianWale
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className='p-1' >
                                <Nav className="justify-content-start flex-grow-1 pe-3 gap-2">
                                    <p className='d-block d-sm-none bg-warning rounded text-center'>Service at your doorstep</p>
                                    <Nav.Link onClick={handleHomeClick} className=' text-start btn custom-btn-primary px-2  rounded-md text-black fw-5 mt-1 md:mt-0'>Home</Nav.Link>
                                    <Nav.Link onClick={handleClose} className=' text-start btn custom-btn-primary px-2 rounded-md text-black fw-5 mt-1 md:mt-0' as={Link} to={'/BookService'} >Book New Service</Nav.Link>
                                    <Nav.Link onClick={handleClose} className=' text-start btn custom-btn-primary px-2 rounded-md text-black fw-5 mt-1 md:mt-0' as={Link} to={'/technician'} > Technician</Nav.Link>
                                    <Nav.Link as={Link} onClick={handleClose} to={'/contact-us'} className=' text-start btn custom-btn-primary px-2 rounded-md text-black font-weight-bold mt-1 md:mt-0'>Contact us</Nav.Link>
                                    <NavDropdown className='text-start btn custom-btn-primary p-0 ps-1  rounded-md text-black font-weight-bold mt-1 md:mt-0' title="Services" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/ac-repair">AC Repairing</NavDropdown.Item>
                                        <NavDropdown.Item href="/refrigrator-repair">Refrigrator Repairing</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link onClick={handleClose} className=' text-start btn custom-btn-primary px-2 rounded-md text-black fw-5 mt-1 md:mt-0' as={Link} to={'/Login'} > Account</Nav.Link>
                                </Nav>

                                <Nav className="justify-content-end flex-grow-1 pe-3 mt-2">
                                    <div className='d-block d-sm-none'>
                                        <hr />
                                        <p>Follow and Subscribe</p>
                                    </div>
                                    <div className='d-flex flex-sm-row flex-column'>
                                        <div className='d-flex align-items-center justify-content-start'>
                                            <a
                                                href={adminData.fblink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaFacebookSquare
                                                    className="fs-2 mx-2  about-icon"
                                                    style={{ color: "#1877F2" }}
                                                />
                                            </a>
                                            <a
                                                href={adminData.instalink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaSquareInstagram
                                                    className="fs-2 mx-2  about-icon"
                                                    style={{ color: "#F56040" }}
                                                />
                                            </a>
                                            <a href="" target="_blank" rel="noopener noreferrer">
                                                <FaSquareXTwitter
                                                    className="fs-2 mx-2  about-icon"
                                                    style={{ color: "black" }}
                                                />
                                            </a>
                                            <a href={adminData.youtube_link} target="_blank" rel="noopener noreferrer">
                                                <FaYoutube
                                                    className="fs-2 mx-2  about-icon"
                                                    style={{ color: "red" }}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='d-block d-sm-none'>
                                        <hr />
                                        <p>Contact & Email</p>
                                        <div className='d-flex flex-sm-row flex-column'>
                                            <div className='d-flex justify-content-start p-0'>
                                                <FaSquareWhatsapp className='fs-2' color='green' />
                                                <p className='ms-2'>9171959701</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-block d-sm-none'>
                                        <div className='d-flex flex-sm-row flex-column'>
                                            <div className='d-flex justify-content-start p-0'>
                                                <a href="mailto:jpkushwaha06@outlook.com" className='link-offset-2 link-underline link-underline-opacity-0 d-flex'>
                                                    <IoMail className='fs-2' color='#DB4437' />
                                                    <p className='ms-2'>help@Technicianwale.com</p>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}
export default NavBar
