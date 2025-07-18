import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import HeroSlider from "./hero-slider";
import FeatureArea from "./feature-area";
import ServiceArea from "./service-area"; 
import BrandArea from "./brand-area";
import SupportArea from "./support-area";
import TestimonialArea from "./testimonial-area";
import SliderArea from "./slider-area";
import FaqArea from "./faq-area";
import BlogArea from "@/src/common/blog-area";
import Footer from "@/src/layout/footers/footer";
import HeroArea from "../home-3/hero-area";
import HeaderThree from "@/src/layout/headers/header-3";
import AboutArea from "../home-3/about-area";
import CounterArea from "../home-3/counter-area";  

const HomeOne = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <HeroArea />
        <CounterArea />
        <AboutArea />
        <ServiceArea />
        <BrandArea />
        <SupportArea />
        <TestimonialArea />
        <SliderArea />
        <FaqArea />
        <BlogArea />
        <Footer />
      </main>
    </>
  );
};

export default HomeOne;
