import React from 'react'
import { Image, Navbar } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

function Footer() {

    const { t, i18n } = useTranslation();

    return (
        <div>
            <footer className="text-center">
                {/* <!-- Grid container --> */}
                <div className="container p-4 pb-0">
                    {/* <!-- Section: Social media --> */}
                    <section className="mb-4">
                        {/* <!-- Facebook --> */}
                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#3b5998" }}
                            href="#!"
                            role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></a>

                        {/* <!-- Twitter --> */}
                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#55acee" }}
                            href="#!"
                            role="button"
                        ><i className="fab fa-twitter"></i
                        ></a>

                        {/* <!-- Google --> */}
                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#dd4b39" }}
                            href="#!"
                            role="button"
                        ><i className="fab fa-google"></i
                        ></a>

                        {/* <!-- Instagram --> */}
                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#ac2bac" }}
                            href="#!"
                            role="button"
                        ><i className="fab fa-instagram"></i
                        ></a>
                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#0082ca" }}
                            href="#!"
                            role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></a>
                        <a
                            data-mdb-ripple-init
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#333333" }}
                            href="#!"
                            role="button"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>
                </div>

                <div className="text-center p-3"  style={{ fontWeight: "700" }}>
                    © 2020 {t('Footer.Copyright')} : 
                    <a className="text-body" href= "https://mdbootstrap.com/">{t('Footer.Technicianwale')}</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer