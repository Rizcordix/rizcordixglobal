import React, { useRef } from 'react';
import icon1 from "@assets/img/icon/Creative-Content-Writing.png";
import icon2 from "@assets/img/icon/Branding.png"; // Using the same image for now
import icon3 from "@assets/img/icon/uiux.png"; // Using the same image for now
import icon4 from "@assets/img/icon/App-Design-&-Development.png"; // Using the same image for now
import icon5 from "@assets/img/icon/Animation-&-Video-Editing.png"; // Using the same image for now
import icon6 from "@assets/img/icon/graphic-design.png"; // Using the same image for now
import Image from 'next/image';
import Slider from "react-slick";

const slider_data = [
    { id: 1, title: ['Creative ', <span key="cw">Content Writing</span>], icon: icon1 },
    { id: 2, title: ['Branding & ', <span key="bm">Merchandising</span>], icon: icon2 },
    { id: 3, title: ['UI/UX ', <span key="dd">Design & Development</span>], icon: icon3 },
    { id: 4, title: ['App ', <span key="ad">Design & Development</span>], icon: icon4 },
    { id: 5, title: ['Animation & ', <span key="ve">Video Editing</span>], icon: icon5 },
    { id: 6, title: ['Graphic & ', <span key="id">Illustration Design</span>], icon: icon6 },
];

const setting = {
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    pauseOnFocus: false,
    pauseOnHover: true,
}

const SliderArea = () => {
    const sliderRef = useRef(null);
    return (
        <>
            <section className="tp-text-slider-area fix pt-100 pb-100">
                <div className="container-fluid gx-0">
                    <div className="row gx-0">
                        <div className="col-lg-12">
                            <div className="tp-text-slider">
                                <Slider {...setting} ref={sliderRef} className="tp-text-active">
                                    {slider_data.map((item, i) =>
                                        <div key={i} className="tp-text-item">
                                            <div className="tp-text-slider-wrapper">
                                                <div className="tp-text-slider-item d-flex align-items-center">
                                                    <Image src={item.icon} alt={`icon-${i + 1}`} />
                                                    <h3 className="text-title">{item.title.map((t, idx) => t)}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SliderArea;
