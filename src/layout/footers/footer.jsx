import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import headphone from "@assets/img/footer/headphone.png";
import footer_logo from "@assets/img/logo/logo1.png";
import user from "@assets/img/footer/user.png";
import EmailAeroplan from '@/src/svg/email-aeroplan';
import SocialLinks, { CopyRight } from '@/src/common/social-links';

const footer_content = { 
    contact_us: <> Contact us at <span>@RizcordixGlobal.com </span></>,
    mail: "info@rizcordixglobal.com",
    contact_text: "PERFECT SOLUTION From our Advisor",
    phone: "92 666 888 0000",
    info: <>Rizcordix Global Pvt Ltd is a premier digital service provider, specializing in creative and innovative solutions across design, development, and branding.</>,
    map: "https://maps.app.goo.gl/rnc4sH3kp3DWT6nV8",
    address: <>184 High St N<br /> London E6, UK</>,
    mail_2: "info@rizcordixglobal.com",
    mail_phone: <> info@rizcordixglobal.com <br /> +44 161 818 6442</>,


    service_links: [
        "Parking permission",
        "Fire Service Noc",
        "Report a Parking Violation",
        "Residential Parking",
        "Vendor Registration",
        "City Board Applications",
    ],
    footer_nav: [
        {title: "Home", link: "/"},
        {title: "About Rizcordix", link: "/about"},
        {title: "Our Services", link: "/service"},
        {title: "Portfolio", link: "/portfolio"},
        {title: "Blogs", link: "/blog"},
        {title: "Contact Us", link: "/contact"},
    ],



}
const {contact_us, mail, contact_text, phone, info, map, address, mail_2, mail_phone, service_links, footer_nav} = footer_content


const Footer = () => {
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
            <footer className="tp-footer-area p-relative">
                <div className="tp-footer-bg" style={{backgroundImage: `url(/assets/img/footer/footer-bg.jpg)`}}></div>
                <div className="tp-footer-top-shape" style={{backgroundImage: `url(/assets/img/footer/footer-top-bg.png)`}}></div>
                
                <div className="container container-large">

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-footer-top-area">
                                <div className="row align-items-center">
                                <div className="col-lg-6">  
                                    <div className="tp-footer-top-contact">
                                        <a href={`mailto:${mail}`}>{contact_us}</a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="tp-footer-top-right d-flex justify-content-start justify-content-lg-end">
                                        <div className="tp-footer-top-right-headphone">
                                            <Image src={headphone} alt="theme-pure" />
                                        </div>
                                        <div className="tp-footer-top-right-content">
                                            <p>{contact_text}</p>
                                            <a href={`tel:${phone}`}>+44 161 818 6442</a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tp-footer-main-area">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-1">
                                <div className="tp-footer-logo">
                                <a href="index.html"> <Image src={footer_logo} alt="theme-pure" /></a>
                                </div>
                                <div className="tp-footer-widget-content">
                                    <div className="tp-footer-info">
                                        <p>{info}</p>
                                        <div className="tp-footer-main-location">
                                            <a target='_blank' href={map}> <i className="fa-sharp fa-light fa-location-dot"></i> 
                                            {address}</a>
                                        </div>
                                        <div className="tp-footer-main-mail">
                                            <a href={`mailto:${mail_2}`}>
                                                <i className="fa-light fa-message-dots"></i>{mail_phone}</a>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-2">
                                <h3 className="tp-footer-widget-title">Pages</h3>
                                <div className="tp-footer-widget-content">
                                    <ul>
                                        {footer_nav.map((item, i) => (
                                            <li key={i}><Link href={item.link}>{item.title}</Link></li>
                                        ))}
                                    </ul>

                                </div>
                                </div> 
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-3">
                                <h3 className="tp-footer-widget-title">Contact Info</h3>
                                <div className="tp-footer-widget-content">
                                    <div className="tp-footer-author d-flex">
                                        <div className="tp-footer-author-thumb">
                                            <Image src={user} alt="theme-pure" />
                                        </div>
                                        <div className="tp-footer-author-content">
                                            <span>Chat With Expert <br /> Active Now</span>
                                        </div>
                                    </div>
                                    <h3 className="tp-footer-widget-title">Portfolios</h3>
                                    <ul>
                                        <li><Link href="/content_portfolio">Content Writing</Link></li>
                                        <li><Link href="/branding_portfolio">Branding and Marketing</Link></li>
                                        <li><Link href="/graphic_portfolio">Graphic Designing</Link></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-5 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-4">
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
                                <p><CopyRight /> </p>
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

export default Footer;