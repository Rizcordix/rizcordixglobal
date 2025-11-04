import React from 'react';
import Image from 'next/image';


import portfolio_thumb from "@assets/img/portfolio/portfolio-details/content_writing.png";
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
            title: "BloomTech Solutions"
        },
        {
            id: 2, 
            icon: portfolio_icon_2,
            meta_title: "Categories",
            title: "SEO Content, Blog Writing"
        },
        {
            id: 3, 
            icon: portfolio_icon_3,
            meta_title: "Project Name",
            title: "Content Strategy & Copywriting"
        },
    ],
    title_1: "ELEVATING BRANDS THROUGH COMPELLING CONTENT",
    description_1: <>At Rizcordix Global, we crafted a comprehensive content strategy for BloomTech that increased their organic traffic by 180% within six months. Our team of expert writers developed SEO-optimized blog posts, website copy, and marketing collateral that perfectly captured their brand voice while targeting high-value keywords. We don&apos;t just write words - we create content that converts, combining data-driven SEO techniques with engaging storytelling to establish thought leadership and drive measurable business results.</>,
    description_2: <>Our content writing process begins with in-depth market research and competitor analysis to identify the most valuable opportunities. For BloomTech, we developed a 12-month content calendar with strategically timed publications that aligned with their product launches and industry events. The results included a 65% increase in lead generation and significant improvements in search rankings for competitive keywords. <br /><br />What sets Rizcordix apart is our ability to blend technical expertise with creative flair. Our writers are trained in both SEO best practices and persuasive writing techniques, ensuring your content ranks well while resonating with your target audience. We measure success not just by word count, but by engagement metrics, conversion rates, and ultimately, your ROI.</>,
    title_2: <>Our content writing services deliver:</>,
    list_title: [
        <>Strategic SEO content that ranks well and drives traffic</>,
        <>Brand-aligned messaging that builds trust and authority</>,
        <>Conversion-focused copy that turns readers into customers</>,
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