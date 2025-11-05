import our_service_data from '@/src/data/service-data';
import AngleArrow from '@/src/svg/angle-arrow';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceArea = () => {
    return (
        <>
           <section className="tp-service-breadcrumb-area p-relative pt-120">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="tp-service-breadcrumb-title-wrapper">
                            <h3 className="tp-section-title">
                                Best Digital <span className="title-color">Technology</span> <br /> Agency in the UK
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-service-breadcrumb-title-wrapper justify-content-start justify-content-xl-end d-flex">
                            <p>
                                We offer expert digital solutions, helping brands grow through creative and impactful design, innovative web development, and personalized branding.
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        {our_service_data.map((item, i) => 
                            <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-service-3-content breadcrumb-item mb-30">
                                <div className="tp-service-3-content-thumb">
                                    <Image src={item.img} alt="Rizcordix Global services" />
                                </div>
                                <h4 className="tp-service-breadcrumb-title">
                                    <Link href={item.Link}>{item.title}</Link>
                                </h4>
                                <p>{item.description}</p>
                                <div className="tp-service-btn">
                                    <Link href={item.Link}>
                                        Read More 
                                        <i className="fa-solid fa-arrow-up-right"></i>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        )} 
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center">
                            <div className="tp-about-call fadeUp">
                                <a href="tel:+44 1234 567890">
                                    <p><i className="fa-solid fa-phone"></i> 
                                    Connect with Rizcordix Global for innovative digital solutions <span>+44 1234 567890</span>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default ServiceArea;
