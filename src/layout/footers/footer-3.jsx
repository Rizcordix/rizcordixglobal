import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import footer_logo from "@assets/img/logo/logo1.png";
import SocialLinks, { CopyRight } from '@/src/common/social-links';
import EmailAeroplan from '@/src/svg/email-aeroplan';

// The footer contact details
const footer_contact = {
    bg_img: "assets/img/footer/footer-bg.jpg",
    footer_info: <>Rizcordix Global Pvt Ltd is a premier digital service provider, specializing in creative and innovative solutions across design, development, and branding.</>,
    map_link: "https://maps.app.goo.gl/rnc4sH3kp3DWT6nV8",
    address: <>184 High St N<br /> London E6, UK</>,
    mail: "info@rizcordixglobal.com",
    phone: "+44 161 818 6442",
    service_links: [
        { title: "Parking permission", link: "#" },
        { title: "Fire Service Noc", link: "#" },
        { title: "Report a Parking Violation", link: "#" },
        { title: "Residential Parking", link: "#" },
        { title: "Vendor Registration", link: "#" },
        { title: "City Board Applications", link: "#" },
    ],
    footer_nav: [
        { title: "Home", link: "/" },
        { title: "About Rizcordix", link: "/about" },
        { title: "Our Services", link: "/service" },
        { title: "Portfolio", link: "/portfolio" },
        { title: "Blogs", link: "/blog" },
        { title: "Contact Us", link: "/contact" },
    ],
};

const FooterThree = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);

    // Function to handle form submission
    const submitForm = () => {
        const email = document.getElementById("email").value;
        const termsAgreed = document.getElementById("flexCheckChecked").checked;

        if (!email || !termsAgreed) {
            alert("Please enter a valid email and agree to the terms.");
            return;
        }

        setIsLoading(true); // Show the loading spinner

        // Create the payload for the POST request
        const data = new FormData();
        data.append('email', email);

        // Sending the email to the Google Sheets script
        fetch("https://script.google.com/macros/s/AKfycbyncEwjhPHJBpPMtP_JzPOmF6ejlQGFEh9d8QYIgq4FQZHakzkCY0K6dxOzFK3LmtVkZw/exec", {
            method: 'POST',
            body: data
        })
            .then(response => response.text())
            .then(responseText => {
                setIsLoading(false); // Hide the loading spinner
                if (responseText === "Success") {
                    setSuccessMessage(true); // Show success message
                    setTimeout(() => {
                        setSuccessMessage(false); // Optionally hide success message after some time
                    }, 5000); // Hide after 5 seconds
                } else {
                    alert("There was an error. Please try again.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("There was an error. Please try again.");
                setIsLoading(false);
            });
    };

    return (
        <>
            <footer className="tp-footer-3-area p-relative">
                <div className="tp-footer-bg" style={{ backgroundImage: `url(${footer_contact.bg_img})` }}></div>
                <div className="container">
                    <div className="tp-footer-3-main-area">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-3-col-1">
                                    <div className="tp-footer-logo">
                                        <Link href="/">
                                            <Image src={footer_logo} alt="theme-pure" />
                                        </Link>
                                    </div>
                                    <div className="tp-footer-widget-content">
                                        <div className="tp-footer-info">
                                            <p>{footer_contact.footer_info}</p>
                                            <div className="tp-footer-main-location">
                                                <Link target="_blank" href={footer_contact.map_link}>
                                                    <i className="fa-sharp fa-light fa-location-dot"></i>
                                                    {footer_contact.address}
                                                </Link>
                                            </div>
                                            <div className="tp-footer-main-mail">
                                                <a href={`mailto:${footer_contact.mail}`}>
                                                    <i className="fa-light fa-message-dots"></i>
                                                    {footer_contact.mail} <br /> {footer_contact.phone}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-3-col-2">
                                    <h3 className="tp-footer-widget-title">Pages</h3>
                                    <div className="tp-footer-widget-content">
                                        <ul>
                                            {footer_contact.footer_nav.map((item, i) => <li key={i}><Link href={item.link}>{item.title}</Link></li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-3-col-3">
                                    <h3 className="tp-footer-widget-title">Newsletter</h3>
                                    <div className="tp-footer-from">
                                        <div className="tp-footer-text-email p-relative">
                                            <input type="email" id="email" placeholder="Enter Email Address" required />
                                            <span>
                                                {isLoading ? (
                                                    <div 
                                                        className="loading-spinner" 
                                                        style={{
                                                            width: '20px',
                                                            height: '20px',
                                                            border: '2px solid rgba(255, 255, 255, 0.3)',
                                                            borderTop: '2px solid white',
                                                            borderRadius: '50%',
                                                            animation: 'spin 1s linear infinite'
                                                        }}
                                                    ></div>
                                                ) : (
                                                    <button id="submitButton" type="button" onClick={submitForm}>
                                                        <EmailAeroplan />
                                                    </button>
                                                )}
                                            </span>
                                        </div>
                                        <div className="tp-footer-form-check">
                                            <input className="form-check-input" id="flexCheckChecked" type="checkbox" required />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                I agree to all your terms and policies
                                            </label>
                                        </div>

                                        {successMessage && <div id="successMessage" style={{ color: "white" }}>Success! You&apos;ve been subscribed.</div>}
                                    </div>
                                    <div className="tp-footer-widget-social">
                                        <SocialLinks />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-footer-copyright-area p-relative">
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <div className="tp-footer-copyright-inner">
                                    <p><CopyRight /></p>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className="tp-footer-copyright-inner text-lg-end">
                                    <Link href="/terms">Terms and conditions</Link>
                                    <Link className="ml-50" href="/privacypolicy"> Privacy policy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterThree;
