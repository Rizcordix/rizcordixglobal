import Link from 'next/link';
import Image from 'next/image';
import ImagePopup from './ImagePopup';
import React, { useState } from 'react';

import Logo from "@assets/img/logo/logo2.png";
import sidebar_img_1 from "@assets/img/portfolio/img-1.jpg";
import sidebar_img_2 from "@assets/img/portfolio/img-2.jpg";
import sidebar_img_3 from "@assets/img/portfolio/img-3.jpg";
import sidebar_img_4 from "@assets/img/portfolio/img-4.jpg";
import sidebar_img_5 from "@assets/img/portfolio/img-5.jpg";
import sidebar_img_6 from "@assets/img/portfolio/img-6.jpg";
import MobileMenus from '../layout/headers/mobile-menus';
const images =  [
    {id: 1, img: sidebar_img_1 }, 
    {id: 2, img: sidebar_img_2 }, 
    {id: 3, img: sidebar_img_3 }, 
    {id: 4, img: sidebar_img_4 }, 
    {id: 5, img: sidebar_img_5 }, 
    {id: 6, img: sidebar_img_6 },
]


const Sidebar = ({sidebarOpen, setSidebarOpen, home_three}) => {
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const img = images.map((item) => item.img.src);

    return (
        <>
            <div className={`offcanvas__area ${sidebarOpen ? "offcanvas-opened" : ""} ${home_three ? "home-3-pos" : ""}`}>
                <div className="offcanvas__wrapper">
                    <div className="offcanvas__close">
                        <button className="offcanvas__close-btn offcanvas-close-btn" onClick={() => setSidebarOpen(false)}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1 1L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                <div className="offcanvas__content">
                    <div className="offcanvas__top mb-50 d-flex justify-content-between align-items-center">
                        <div className="offcanvas__logo logo">
                            <Link href="/">
                            <Image src={Logo} alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="mobile-menu fix d-lg-none"></div>
                    <div className="tp-mobile-menu-pos mean-container d-lg-none">
                        <MobileMenus />
                    </div>
                    <div className="offcanvas__popup">
                        <p>Design and creativity aren&apos;t just professions — they&apos;re how we bring smart, impactful ideas to life across digital platforms.</p>
                        <div className="offcanvas__popup-gallery">
                            <h4 className="offcanvas__title">Gallery</h4>
                            {images.map((item, i) => 
                                <a key={i} style={{ cursor: "pointer" }} 
                                onClick={() => handleImagePopup(i)} 
                                className="popup-image">
                                    <Image src={item.img} alt="theme-pure" />
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="offcanvas__contact">
                        <h4 className="offcanvas__title">Contacts</h4>
                        <div className="offcanvas__contact-content d-flex">
                            <div className="offcanvas__contact-content-icon">
                            <i className="fa-sharp fa-solid fa-location-dot"></i>
                            </div>
                            <div className="offcanvas__contact-content-content">
                            <a href="https://maps.app.goo.gl/rnc4sH3kp3DWT6nV8">184 High St N, London E6</a>
                            </div>
                        </div>
                        <div className="offcanvas__contact-content d-flex">
                            <div className="offcanvas__contact-content-icon">
                            <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="offcanvas__contact-content-content">
                            <a href="mailto:info@rizcordixglobal.com">info@rizcordixglobal.com  </a>
                            </div>
                        </div>
                        <div className="offcanvas__contact-content d-flex">
                            <div className="offcanvas__contact-content-icon">
                            <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="offcanvas__contact-content-content">
                            <a href="tel:01310-069824"> +44 161 818 6442</a>
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas__social"> 
                        <a className="icon facebook" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="icon twitter" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="icon youtube" href="#"><i className="fab fa-youtube"></i></a>
                        <a className="icon linkedin" href="https://www.linkedin.com/company/rizcordix"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                </div>
            </div>
         <div className={`body-overlay ${sidebarOpen && "opened"}`} onClick={() => setSidebarOpen(false)}></div>

         {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={img}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
        </>
    );
};

export default Sidebar;