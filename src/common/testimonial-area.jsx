import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import testimonial_shape_1 from "@assets/img/testimonial/home-3/shape-1.png";
import testimonial_shape_2 from "@assets/img/testimonial/home-3/shape-2.png";

import testimonial_img_1 from "@assets/img/testimonial/home-3/img-2.png";
import testimonial_img_2 from "@assets/img/testimonial/home-3/img-3.png";

import testimonial_slider_img_1 from "@assets/img/testimonial/home-3/Testimonial_Image_1.jpg";
import testimonial_slider_img_2 from "@assets/img/testimonial/home-3/Testimonial_Image_2.jpg";
import testimonial_slider_img_3 from "@assets/img/testimonial/home-3/Testimonial_Image_3.jpg";
import testimonial_slider_img_4 from "@assets/img/testimonial/home-3/Testimonial_Image_4.jpg";

const slider_img = [
    testimonial_slider_img_1,
    testimonial_slider_img_2,
    testimonial_slider_img_3,
    testimonial_slider_img_4,
];

const slider_text = [
    {
        text: <>Their team completely transformed our brand voice and visuals. The content writing and branding work was precise, creative, and impactful.</>,
        name: "— Jacob Noah"
    },
    {
        text: <>From design mockups to a fully responsive website, they handled everything flawlessly. The UI/UX was intuitive and exceeded our expectations.</>,
        name: "— Heather Jonathan"
    },
    {
        text: <>The animated video and pitch deck helped us grab investor attention instantly. Their visuals told our story better than words ever could.</>,
        name: "— Bryan Arthur"
    },
    {
        text: <>They crafted a beautiful mobile app interface and helped us digitize our core services. Truly a reliable and creative team.</>,
        name: "— David Chen"
    },
];

const TestimonialArea = () => {
    const setting_img = {
        gap: 0,
        pagination: false,
        arrows: false,
        type: 'loop',
        perPage: 1,
        isNavigation: true,
    };

    const setting_text = {
        pagination: true,
        arrows: false,
        type: 'loop',
        breakpoints: {
            576: {
                perPage: 1
            },
        },
    };

    const mainRef = useRef(null);
    const thumbsRef = useRef(null);

    useEffect(() => {
        if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
            mainRef.current.sync(thumbsRef.current.splide);
        }
    }, []);

    return (
        <>
            <section className="tp-testimonial-3-area pb-120">
                <div className="tp-testimonial-3-large-box"></div>
                <div className="tp-testimonial-3-shape">
                    <Image className="shape-1" src={testimonial_shape_1} alt="theme-pure" />
                    <Image className="shape-2" src={testimonial_shape_2} alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-4">
                            <div className="tp-testimonial-3-wrapper">
                                <div className="tp-testimonial-3-wrapper-thumb p-relative">
                                    <Splide
                                        options={setting_img}
                                        ref={mainRef}
                                        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
                                        className="testimonial-navigation-active splide z-index-1 border-0">
                                        {slider_img.map((item, i) =>
                                            <SplideSlide key={i}>
                                                <Image className="slide" src={item} alt="theme-pure" />
                                            </SplideSlide>
                                        )}
                                    </Splide>
                                    <Image className="shape-1" src={testimonial_img_1} alt="theme-pure" />
                                    <Image className="shape-2" src={testimonial_img_2} alt="theme-pure" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-8">
                            <div className="tp-testimonial-3-content">
                                <Splide
                                    options={setting_text}
                                    ref={thumbsRef}
                                    className="testimonial-3-active splide">
                                    {slider_text.map((item, index) =>
                                        <SplideSlide key={index}>
                                            <div className="tp-testimonial-3-slider-wrapper">
                                                <p>{item.text}</p>
                                                <p style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '16px', color:'#05DAC3'}}>{item.name}</p>
                                            </div>
                                        </SplideSlide>
                                    )}
                                </Splide>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialArea;
