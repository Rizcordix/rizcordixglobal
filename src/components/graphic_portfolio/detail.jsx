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
            title: "Viva Lifestyle Brands"
        },
        {
            id: 2, 
            icon: portfolio_icon_2,
            meta_title: "Categories",
            title: "Brand Identity, Marketing Collateral"
        },
        {
            id: 3, 
            icon: portfolio_icon_3,
            meta_title: "Project Name",
            title: "Complete Visual Rebranding"
        },
    ],
    title_1: "TRANSFORMING BRANDS THROUGH VISUAL STORYTELLING",
    description_1: <>Rizcordix Global partnered with Viva Lifestyle to completely revitalize their brand identity across all touchpoints. Our design team created a fresh, modern aesthetic that maintained their heritage while appealing to a younger demographic. The project encompassed logo redesign, packaging, social media templates, and print collateral - all working harmoniously to tell a consistent brand story. The new visual identity helped Viva achieve a 40% increase in social media engagement and significantly improved brand recall.</>,
    description_2: <>Our design philosophy focuses on creating visuals that don&apos;t just look good, but work hard for your business. For Viva, we conducted extensive market research to understand their audience&apos;s preferences before developing mood boards and design concepts. The final deliverables included a comprehensive brand style guide ensuring consistency across all platforms. <br /><br />At Rizcordix, we believe great design should be both beautiful and functional. Whether it&apos;s creating eye-catching social media graphics, persuasive marketing materials, or memorable packaging, our designs are crafted to cut through the noise and make an immediate impact. We combine creative flair with strategic thinking to deliver visuals that support your business objectives.</>,
    title_2: <>Our graphic design solutions provide:</>,
    list_title: [
        <>Memorable brand identities that stand out in crowded markets</>,
        <>Marketing materials that convert viewers into customers</>,
        <>Cohesive visual systems across all platforms and mediums</>,
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