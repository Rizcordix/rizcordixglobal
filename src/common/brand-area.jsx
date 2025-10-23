import Image from 'next/image';
import { Navigation } from 'swiper';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import brand_img_1 from "@assets/img/brand/home-3/dsynex.png";
import brand_img_2 from "@assets/img/brand/home-3/foskrift.png";
import brand_img_3 from "@assets/img/brand/home-3/maq.png";
import brand_img_4 from "@assets/img/brand/home-3/publishing.png";
import brand_img_5 from "@assets/img/brand/home-3/domyebook.png";

// Example brand links
const brand_links = [
    "https://dsynex.com",
    "https://foskrift.com",
    "https://maqcorp.com",
    "https://venturist.us",
    "https://brand5.com"
];

// Map images and links together
const brand_img = [
    { img: brand_img_1, link: brand_links[0] },
    { img: brand_img_2, link: brand_links[1] },
    { img: brand_img_3, link: brand_links[2] },
    { img: brand_img_4, link: brand_links[3] },
    { img: brand_img_5, link: brand_links[4] },
    { img: brand_img_1, link: brand_links[0] },
    { img: brand_img_2, link: brand_links[1] },
    { img: brand_img_3, link: brand_links[2] },
    { img: brand_img_4, link: brand_links[3] },
    { img: brand_img_5, link: brand_links[4] },
];

const setting = {
        slidesPerView: 5,
        autoplay: {
                delay: 100,
        },
        autoplay : true,
        breakpoints: {
                '1200': {
                        slidesPerView: 5,
                },
                '992': {
                        slidesPerView: 4,
                },
                '768': {
                        slidesPerView: 3,
                },
                '576': {
                        slidesPerView: 2,
                },
                '0': {
                        slidesPerView: 1,
                },
        },
}

const BrandArea = ({service}) => {
        const [isLoop, setIsLoop]  = useState(false)
        useEffect(() => {
             setIsLoop(true)
        }, [])
        
        return (
                <>
                {/* tp-brand-3-area breadcrumb-brand p-relative pt-65 pb-60 */}
                         <div className={`tp-brand-3-area p-relative ${service ? "breadcrumb-brand" : ""} pt-65 pb-60`}>
                                <div className="tp-brand-3-right-color"></div>
                                        <div className="container">
                                        <div className="row"></div>
                                                <div className="col-xl-12">
                                                        <div className="tp-brand-3-wrapper">
                                                                <Swiper 
                                                                {...setting}
                                                                loop={isLoop}
                                                                modules={Navigation}
                                                                className="brand-3-active swiper-container">
                                                                        {brand_img.map((item, i) => 
                                                                                <SwiperSlide key={i}>
                                                                                        <div className="tp-brand-3-thumb">
                                                                                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                                                                        <Image src={item.img} alt="theme-pure" />
                                                                                                </a>
                                                                                        </div>
                                                                                </SwiperSlide>
                                                                        )} 
                                                                </Swiper>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                </>
        );
};

export default BrandArea;