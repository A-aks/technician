import React, { useEffect, useRef, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button'
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube, FaSquareInstagram, FaSquareXTwitter, FaSquareWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import '../App.css';



const NavBar: React.FC<{ isLoggedIn: boolean; handleLogout: () => void }> = ({ isLoggedIn, handleLogout }) => {
    const [show, setShow] = useState<Boolean>(false);
    const [adminData, setAdminData] = useState<any>({});
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'hi' : 'en';
        i18n.changeLanguage(newLang);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    useEffect(() => {

    }, []);



    return (
        <>
            {['sm'].map((expand) => (
                <Navbar expand={expand} className="heading-weight bg-body-tertiary mb-1 fixed-top card m-1" sticky='top'>
                    <Container className='rounded' style={{ background: '#f8f8f8' }} fluid>
                        <Image
                            src={process.env.PUBLIC_URL + 'icons8-tools-ios-17-filled-32.png'}
                            style={{ filter: 'brightness(0) saturate(100%) invert(86%) sepia(30%) saturate(2464%) hue-rotate(329deg) brightness(108%) contrast(97%)' }}
                            alt="icon"
                        />
                        <Navbar.Brand href="#" className='ms-2 '>
                            <div className='heading-weight flex flex-column m-0 p-0'><p className='p-0 m-0'>{t('Navbar.Technicianwale')}</p></div>
                        </Navbar.Brand>

                        <Navbar.Toggle className='shadow-none border-0' aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleShow} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            show={show} onHide={handleClose}
                        >
                            <Offcanvas.Header className='mt-1 mx-2' closeButton>
                                <Image
                                    src={process.env.PUBLIC_URL + 'icons8-tools-ios-17-filled-32.png'}
                                    style={{ filter: 'brightness(0) saturate(100%) invert(86%) sepia(30%) saturate(2464%) hue-rotate(329deg) brightness(108%) contrast(97%)' }}
                                    alt="icon"
                                />
                                <Offcanvas.Title className='heading-weight justify-content-center ' style={{ marginLeft: "4rem" }} id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    {t('Navbar.Technicianwale')}
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className='p-1' >
                                <Nav className="heading-weight justify-content-start flex-grow-1 pe-1 gap-1"  >
                                    <p className='heading-weight d-block d-sm-none bg-warning rounded text-center'>{t('Navbar.Service at your doorstep')}</p>
                                    <Nav.Link onClick={handleClose} as={Link} to={'/'} className='heading-weight nav-heading text-black mx-1' >{t('Navbar.Home')}</Nav.Link>
                                    <Nav.Link onClick={handleClose} className='nav-heading text-black mx-1' as={Link} to={'/complain'} >{t('Navbar.Complain')}</Nav.Link>
                                    <Nav.Link onClick={handleClose} className='nav-heading text-black mx-1' as={Link} to={'/technician'} > {t('Navbar.Technician')}</Nav.Link>
                                    {/* <Nav.Link onClick={handleClose} className=' text-start btn custom-btn-primary px-2 rounded-md text-black fw-5 mt-1 md:mt-0' as={Link} to={'/technicianPage'} > {t('Navbar.TechnicianPage')}</Nav.Link> */}
                                    <Nav.Link as={Link} onClick={handleClose} to={'/contact-us'} className=' nav-heading text-black mx-1'>{t('Navbar.Contact us')}</Nav.Link>
                                    <NavDropdown className='nav-heading heading-weight  text-black mx-1' title={t('Navbar.Services')} id="basic-nav-dropdown">
                                        <NavDropdown.Item className='nav-heading heading-weight ' href="/ac-repair" >{t('Navbar.AC Repairing')} </NavDropdown.Item>
                                        <NavDropdown.Item className='nav-heading heading-weight ' href="/refrigrator-repair">{t('Navbar.Refrigrator Repairing')}</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    {isLoggedIn ? (
                                        <Nav.Link onClick={handleLogout} className='nav-heading heading-weight  text-black mx-1' as={Link} to={'/Login'} >{t('Navbar.Logout')}</Nav.Link>
                                    ) : (
                                        <Nav.Link as={Link} to={'/Login'} className='nav-heading heading-weight  text-black mx-1' >{t('Navbar.Login')}</Nav.Link>
                                    )}
                                    <Button
                                        variant=""
                                        onClick={toggleLanguage}
                                        className="heading-weight Translate-button mt-1 text-center d-sm-block mx- mx-sm-5 ">
                                        {i18n.language === 'en' ? 'हिन्दी' : 'English'}
                                    </Button>
                                </Nav>


                                <Nav className="heading-weight justify-content-end flex-grow-1 pe-3 mt-2" >
                                    <div className='d-block d-sm-none'>
                                        <hr />
                                        <p>{t('Navbar.Follow and Subscribe')}</p>
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
                                        <p>{t('Navbar.Contact & Email')}</p>
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
