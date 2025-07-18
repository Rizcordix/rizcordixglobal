import React from 'react';
import Image from 'next/image';


import portfolio_thumb from "@assets/img/portfolio/portfolio-details/img-1.jpg";
import portfolio_icon_1 from "@assets/img/portfolio/portfolio-details/icon-1.png";
import portfolio_icon_2 from "@assets/img/portfolio/portfolio-details/icon-2.png";
import portfolio_icon_3 from "@assets/img/portfolio/portfolio-details/icon-3.png";
import Link from 'next/link';
import RightSymbol from '@/src/svg/right-symbol';
import ContactIcon from '@/src/svg/contact-icon';
import EmailIconTwo from '@/src/svg/email-icon-2';
import ClockIcon from '@/src/svg/clock-icon';
import SocialLinks from '@/src/common/social-links';


const portfolio_details_contact = {
    meta_content: [
        {
            id: 1, 
            icon: portfolio_icon_1,
            meta_title: "Client name",
            title: "UrbanFit Wellness"
        },
        {
            id: 2, 
            icon: portfolio_icon_2,
            meta_title: "Categories",
            title: "iOS, Android, Cross-Platform"
        },
        {
            id: 3, 
            icon: portfolio_icon_3,
            meta_title: "Project Name",
            title: "Fitness Tracking Ecosystem"
        },
    ],
    title_1: "BUILDING MOBILE EXPERIENCES THAT TRANSFORM BUSINESSES",
    description_1: <>For UrbanFit, Rizcordix Global developed a comprehensive fitness ecosystem including native mobile apps, wearable integration, and a web portal for trainers. Our full-stack development team built a scalable architecture that handles 50,000+ active users daily, with features like real-time workout tracking, AI-powered recommendations, and social challenges. The app achieved 4.8/5 ratings on both app stores and helped UrbanFit triple their subscription revenue within the first year of launch.</>,
    description_2: <>We approached this project with a focus on performance and scalability. Using React Native for the front-end and Node.js for the back-end, we created a codebase that delivers native-like performance while allowing efficient cross-platform updates. The app integrates with multiple wearable devices and uses machine learning to personalize workout plans based on user progress and preferences. <br /><br />Rizcordix&apos;s development methodology emphasizes clean code, thorough testing, and future-proof architecture. For UrbanFit, we implemented continuous integration/deployment pipelines and comprehensive documentation to ensure smooth long-term maintenance. The result is a robust platform that continues to evolve with new features while maintaining exceptional reliability and performance.</>,
    title_2: <>Our app development expertise includes:</>,
    list_title: [
        <>End-to-end development from concept to deployment</>,
        <>Cross-platform solutions with native performance</>,
        <>Integration with third-party APIs and hardware</>,
    ]
}
const {meta_content, title_1, description_1, description_2, title_2, list_title }  = portfolio_details_contact

const PortfolioDetailsArea = () => {
    return (
        <>
            <section className="tp-portfolio-details-area pt-120 pb-120">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-portfolio-details-wrapper">
                            <div className="tp-portfolio-details-thumb">
                            <Image src={portfolio_thumb} alt="theme-pure" />
                            </div>
                            <div className="tp-portfolio-details-meta d-flex flex-wrap justify-content-between">
                            <div className="tp-portfolio-details-meta-left d-flex flex-wrap">
                                {meta_content.map((item, i) => 
                                    <div key={i} className="tp-portfolio-details-meta-item d-flex align-items-center">
                                        <div className="tp-portfolio-details-meta-icon">
                                            <Image src={item.icon} alt="theme-pure" />
                                        </div>
                                        <div className="tp-portfolio-details-meta-content">
                                            <h4 className="tp-portfolio-details-meta-title">{item.meta_title}</h4>
                                            <p>{item.title}</p>
                                        </div>
                                    </div> 
                                )} 
                            </div>
                            <div className="tp-portfolio-details-right">
                                <div className="tp-portfolio-details-btn">
                                    <Link href="/portfolio">Need This Project?</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="tp-portfolio-details-wrapper">
                            <h3 className="tp-portfolio-details-title">{title_1}</h3>
                            <p>{description_1}</p>
                            <p>{description_2}</p>
                            <div className="tp-portfolio-details-list mb-30">
                            <h4 className="tp-portfolio-details-list-title">{title_2}</h4>
                            <ul>
                                {list_title.map((list, index) => 
                                    <li key={index}><span><RightSymbol /></span>{list}</li>
                                )}
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tp-portfolio-details-info-box">
                            <div className="tp-portfolio-details-info-address">
                            <h4 className="tp-portfolio-details-info-title">
                                <span>
                                    <ContactIcon />
                                </span>our address</h4>
                                <p>184 High St N, London E6, UK</p>
                            </div>
                            <div className="tp-portfolio-details-info-mail">
                            <h4 className="tp-portfolio-details-info-title">
                                <span>
                                    <ContactIcon />
                                </span>Contact way</h4>
                            <div className="tp-portfolio-details-info-mail-content d-flex">
                                <span>
                                    <EmailIconTwo />
                                </span>
                                <div className="tp-portfolio-details-info-mail-text">
                                    <p>info@rizordix.com</p>
                                    <p>+44 161 818 6442</p>
                                </div>
                            </div>
                            </div>
                            <div className="tp-portfolio-details-info-open d-flex">
                            <div className="tp-portfolio-details-info-open-icon">
                                <span>
                                    <ClockIcon />
                                </span>
                            </div>
                            <div className="tp-portfolio-details-info-open-content">
                                <h4 className="tp-portfolio-details-info-title">Opening Hours</h4>
                                <p>Mon - Sat(8.00am - 6.00pm)</p>
                                <p>Sunday - Closed</p>
                            </div>
                            </div>
                            <div className="tp-portfolio-details-info-social">
                                <SocialLinks />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioDetailsArea;