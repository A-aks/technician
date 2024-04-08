import React, { useEffect, useRef, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import moduleName, { CloseButton } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button'
import { Envelope, Facebook, Instagram, TwitterX, Whatsapp, X, Youtube } from 'react-bootstrap-icons'
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube, FaSquareInstagram, FaSquareXTwitter, FaSquareWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";


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
                <Navbar expand={expand} className="bg-body-tertiary mb-3 fixed-top">
                    <Container fluid>
                        <Image height={45} src={``} roundedCircle />
                        <Navbar.Brand href="#" className='ms-2 '>{"Technicianwale"}</Navbar.Brand>
                        <Navbar.Toggle className='shadow-none border-0' aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleShow} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            show={show} onHide={handleClose}
                        >
                            <Offcanvas.Header closeButton>

                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

                                    <Image height={45} src={`https://jpkushwaha.online//api/media/${adminData.profile_img}`} roundedCircle className='me-2' />
                                    {adminData.admin_name}
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body  >
                                <Nav className="justify-content-start flex-grow-1 pe-3 gap-2">
                                    <Nav.Link onClick={handleHomeClick} className=' text-start btn custom-btn-primary px-2 py-2 rounded-md text-black fw-5 mt-1 md:mt-0'>Home</Nav.Link>
                                    <Nav.Link as={Link} onClick={handleClose} to={"/Gallery"} className=' text-start btn custom-btn-primary px-2 py-2 rounded-md text-black font-weight-bold mt-1 md:mt-0' >Gallery</Nav.Link>
                                    <Nav.Link as={Link} onClick={handleClose} to={"/activities"} className=' text-start btn custom-btn-primary px-2 py-2 rounded-md text-black font-weight-bold mt-1 md:mt-0' > Activities </Nav.Link>
                                    <Nav.Link as={Link} onClick={handleClose} to={"/about"} className=' text-start btn custom-btn-primary px-2 py-2 rounded-md text-black font-weight-bold mt-1 md:mt-0'>Contact us</Nav.Link>

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
                                                <p className='ms-2'>{adminData.mobile}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-block d-sm-none'>
                                        <div className='d-flex flex-sm-row flex-column'>
                                            <div className='d-flex justify-content-start p-0'>
                                                <a href="mailto:jpkushwaha06@outlook.com" className='link-offset-2 link-underline link-underline-opacity-0 d-flex'>
                                                    <IoMail className='fs-2' color='#DB4437' />
                                                    <p className='ms-2'>{adminData.email}</p>
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
