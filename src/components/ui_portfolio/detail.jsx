import React from 'react';
import Image from 'next/image';


import portfolio_thumb from "@assets/img/portfolio/portfolio-details/ui.png";
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
            title: "Finova Banking Solutions"
        },
        {
            id: 2, 
            icon: portfolio_icon_2,
            meta_title: "Categories",
            title: "Web App, Dashboard Design"
        },
        {
            id: 3, 
            icon: portfolio_icon_3,
            meta_title: "Project Name",
            title: "Banking Portal Redesign"
        },
    ],
    title_1: "REVOLUTIONIZING DIGITAL BANKING EXPERIENCES",
    description_1: <>Rizcordix Global transformed Finova&apos;s outdated banking portal into an intuitive, user-friendly platform that reduced customer support queries by 35%. Our UI/UX team conducted extensive user research to identify pain points in the existing system, then designed a completely new interface focused on simplicity and accessibility. The redesign incorporated progressive disclosure of complex banking features, personalized dashboards, and a streamlined navigation system that made financial management effortless for both retail and business customers.</>,
    description_2: <>Our human-centered design approach ensured every element served a clear purpose. We created interactive prototypes that were tested with real users at multiple stages, allowing us to refine the experience before development began. The final design system included a comprehensive component library and style guide to ensure consistency across all platforms. <br /><br />What makes Rizcordix different is our ability to balance aesthetic appeal with functional excellence. For Finova, we didn&apos;t just make things look better - we fundamentally improved how customers interact with their finances. The new design increased customer satisfaction scores by 28% and significantly boosted engagement with underutilized features.</>,
    title_2: <>Our UI/UX design services deliver:</>,
    list_title: [
        <>User research and testing to validate every design decision</>,
        <>Beautiful interfaces that prioritize usability and accessibility</>,
        <>Complete design systems for scalable, consistent experiences</>,
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
                                <p>Suite C125, 4 - 6, Greatorex Street, London, UK, E1 5NF</p>
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
                                    <p>+44 740 070 5723</p>
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