import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import img1 from '@assets/img/contact/buildings.png';

const ContactArea = () => {
    const services = [
        'Creative and Content Writing',
        'Graphic and Illustration Designing',
        'UI/UX Design and Web Development',
        'App Design and Development',
        'Branding and Merchandising',
        'Animation and Video Editing',
        'Digitizing',
        'Presentation and Pitch Deck Design'
    ];

    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-header">
                    <h2>Contact <span style={{ color: '#05DAC3' }}>With Us</span></h2>
                    <p>
                        Ready to bring your ideas to life? Get in touch with Rizcordix Global for world-class 
                        creative services, design solutions, and digital development.
                    </p>
                </div>

                <div className="contact-main">
                    <div className="contact-main-inner">
                        <div className="contact-card">
                            <h3>Get In Touch</h3>
                            <p>
                                With 7 years of experience and a dedicated team of 20-30 professionals, 
                                we're here to transform your vision into reality.
                            </p>

                            <div className="contact-grid">
                                <div className="contact-icon-box">
                                    <div className="contact-icon-circle teal">
                                        <Mail size={32} color="#ffffff" />
                                    </div>
                                    <h4>Email</h4>
                                    <a href="mailto:info@rizcordixglobal.com">info@rizcordixglobal.com</a>
                                </div>

                                <div className="contact-icon-box">
                                    <div className="contact-icon-circle orange">
                                        <Phone size={32} color="#ffffff" />
                                    </div>
                                    <h4>Phone</h4>
                                    <a className="orange" href="tel:+441618186442">+44 161 818 6442</a>
                                </div>

                                <div className="contact-icon-box">
                                    <div className="contact-icon-circle teal">
                                        <MapPin size={32} color="#ffffff" />
                                    </div>
                                    <h4>Office Location</h4>
                                    <p>184 High ST N<br />E6 London UK</p>
                                </div>

                                <div className="contact-icon-box">
                                    <div className="contact-icon-circle orange">
                                        <Clock size={32} color="#ffffff" />
                                    </div>
                                    <h4>Business Hours</h4>
                                    <p>Monday - Saturday</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="services-box"
                            style={{ background: 'linear-gradient(135deg, #070707 0%, #333231 100%)', }}
                        >
                            <h3>Our <span style={{ color: '#05DAC3' }}>Services</span></h3>
                            <div className="services-grid">
                                {services.map((service, index) => (
                                    <div className="service-item" key={index}>
                                        <div
                                            className="service-dot"
                                            style={{
                                                background: index % 2 === 0
                                                    ? 'linear-gradient(135deg, #05DAC3 0%, #04B5A0 100%)'
                                                    : 'linear-gradient(135deg, #FFB302 0%, #E69500 100%)'
                                            }}
                                        ></div>
                                        <span className="service-text">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-cta">
                    <div className="contact-cta-button">
                        🚀 Ready to elevate your brand? Let's create something amazing together!
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactArea;
