import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper';

import slider_shape_1 from "@assets/img/hero/hero-3/shape-1.png";
import slider_shape_2 from "@assets/img/hero/hero-3/shape-2.png";
import slider_shape_3 from "@assets/img/hero/hero-3/shape-3.png";


const hero_slider = [
    {
        id: 1,
        bg_slider_img: "/assets/img/hero/hero-3/hero-1.jpg",
        title: "creative it &",
        title_color: "Bold",
        title_2: "visual strategy",
        bottom_title: "technology",        
    },
    {
        id: 2,
        bg_slider_img: "/assets/img/hero/hero-3/hero-2.jpg",
        title: "Modern it &",
        title_color: "Tech",
        title_2: "solutions",
        bottom_title: "architecture",        
    },
    {
        id: 3,
        bg_slider_img: "/assets/img/hero/hero-3/hero-3.jpg",
        title: "Trusted it &",
        title_color: "Mark",
        title_2: "professional",
        bottom_title: "Computer",        
    },
]

 
const setting = {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    autoplay: {
        delay: 5000,
    },
    watchSlidesProgress: true,
    // Navigation arrows
    navigation: {
        nextEl: ".hero-button-next-1",
        prevEl: ".hero-button-prev-1",
    },
    breakpoints: {
        '1200': {
            
        },
        '992': {
            
        },
        '768': {
            
        },
        '576': {
            
        },
        '0': {
            
        },
    },
}
const HeroArea = () => {
    const [isLoop, setIsLoop] = useState(false)
    useEffect(() => {
        setIsLoop(true)
    }, [])
    return (
        <>
            <section className="tp-hero-3-area p-relative fix">
                <Swiper {...setting} loop={isLoop} modules={[Navigation, EffectFade, Autoplay ]} className="hero-active-3">
                    {hero_slider.map((item, i) => 
                        <SwiperSlide key={i} className="swiper-slide">
                            <div className="tp-hero-3-wrapper p-relative">
                                <div className="container">
                                <div className="tp-hero-3-shape">
                                    <Image className="shape-1" src={slider_shape_1} alt="theme-pure" />
                                    <Image className="shape-2" src={slider_shape_2} alt="theme-pure" />
                                    <Image className="shape-3" src={slider_shape_3} alt="theme-pure" />
                                </div>
                                <div className="tp-hero-3">
                                    <div className="tp-hero-bg" style={{backgroundImage: `url(${item.bg_slider_img})`}}></div>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-lg-12">
                                            <div className="tp-hero-3-content p-relative">
                                            <div className="tp-hero-3-title-wrapper">
                                                
                                                <h3 className="tp-hero-3-title">{item.title}
                                                    <span className="title-color"> {item.title_color}</span>
                                                    <svg className="circle" width="225" height="109" viewBox="0 0 225 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.1481 76.3679C55.8581 93.1793 99.7529 104.44 143.772 104.183C162.905 104.079 184.701 104.166 202.722 94.6158C211.271 90.0778 219.878 82.1335 220.977 67.646C222.363 49.2762 210.892 35.2588 200.906 27.2179C165.903 -0.962245 120.282 3.56052 82.2045 6.12755C61.2594 7.56939 40.2183 11.3015 20.4023 21.1492C14.2432 24.1994 -1.70459 30.792 5.73782 44.0162C9.5729 50.8451 16.7641 54.9568 22.1261 58.4055C62.0733 84.2021 105.527 88.9812 148.155 86.4613C150.328 86.3325 150.504 91.2898 148.331 91.4186C104.606 93.9773 59.5704 89.0201 18.8517 61.4317C12.3772 57.0608 -3.9171 46.3324 1.13856 32.0948C4.27727 23.2263 13.5355 19.7027 19.4163 16.7922C30.4826 11.3337 41.9705 7.7833 53.5703 5.39836C78.3 0.340518 103.691 0.456709 128.733 1.23489C150.355 1.92603 172.628 4.49122 193.003 16.9725C207.334 25.7434 227.976 44.79 223.586 71.8416C220.023 93.7705 201.953 100.932 188.724 103.79C130.327 116.483 69.7686 101.575 13.0061 77.3604C12.5744 77.1678 12.7173 76.2012 13.1481 76.3679Z" fill="currentColor"/>
                                                    </svg>
                                                    <svg className="line" width="265" height="6" viewBox="0 0 265 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.48167 4.22573C87.7577 2.55537 174.532 2.28989 261.746 5.00006C264.795 5.09962 264.753 2.61068 261.746 2.489C175.096 -0.962325 86.9432 -1.06188 0.48167 3.70582C-0.144863 3.739 -0.165748 4.23679 0.48167 4.22573Z" fill="currentColor"/>
                                                    </svg>
                                                    <br />{item.title_2}</h3>
                                                <div className="tp-hero-3-btn">
                                                    <Link className="tp-btn-2" href="/calendly">Expert Consultancy</Link>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="tp-hero-3-bottom p-relative d-none d-md-block">
                                            <h3 className="tp-hero-3-bottom-title">{item.bottom_title}</h3>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </SwiperSlide>  
                    )} 
                </Swiper>
                <div className="tp-hero-3-nav d-none d-xl-block">
                    <button type="button" className="hero-button-prev-1 tp-btn-hover-clear alt-color">
                        <i className="fa-regular fa-arrow-left"></i>
                    <b></b>
                    </button>
                    <button type="button" className="hero-button-next-1 tp-btn-hover-clear alt-color">
                        <i className="fa-regular fa-arrow-right"></i>
                    <b></b>
                    </button>
                </div>
            </section>
        </>
    );
};

export default HeroArea;