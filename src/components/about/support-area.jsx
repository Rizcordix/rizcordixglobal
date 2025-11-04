import VideoPopup from "@/src/modals/video-popup";
import AngleArrow from "@/src/svg/angle-arrow";
import LineArrowTwo from "@/src/svg/line-arrow-2";
import RightSymbol from "@/src/svg/right-symbol";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";


import support_img_1 from "@assets/img/about/home-3/aboutimage1.jpg";
import support_img_2 from "@assets/img/about/home-3/aboutimage3.jpg";
import support_img_3 from "@assets/img/about/home-3/aboutimage2.png";
import support_shape from "@assets/img/about/home-3/shape-1.png";

const support_contact = {
   sub_title_1: "We’ve been here for",
   sub_title_2: " 7 years",
   info: <> Founded by AliAsghar Murtaza and Imran Zammarud, Rizcordix delivers innovative digital, design, and content solutions that help businesses grow and stand out in a competitive world. At Rizcordix, our founders&apos; vision drives every project we undertake, blending creativity and technology to achieve meaningful results. With Rizcordix, brands gain a trusted partner committed to turning ideas into impactful digital experiences.</>,
    lists: [
      <>Crafting compelling content and persuasive brand stories.</>,
      <>Designing stunning visuals, illustrations, and user experiences.</>,
      <>Developing modern websites, mobile apps, and digital platforms.</>,
   ]
   
}
const {sub_title_1, sub_title_2, info, lists} = support_contact

const SupportArea = ()  => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    return(
        <>
        <section className="tp-support-breadcrumb fix pt-120 pb-210">
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="tp-fun-fact-title-wrapper support-breadcrumb">
                     <h3 className="tp-section-title">
                        {sub_title_1}
                        <span className="title-color">
                        {sub_title_2}
                        </span>
                        <span className="title-left-shape">
                           <LineArrowTwo />
                        </span>
                     </h3>
                     <p>{info}</p>
                     <ul className="mb-65">
                        {lists.map((list, i)  => 
                           <li key={i}> <span> <RightSymbol /></span> {list}</li>
                        )} 
                     </ul>
                     <div className="tp-support-breadcrumb-btn mb-30">
                        <Link className="tp-btn" href="form">Tell us How Can We Help</Link>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="tp-about-3-img p-relative fadeRight">
                     <Image src={support_img_1} alt="theme-pure" />
                     <Image className="shape-1" src={support_img_2} alt="theme-pure" />
                     <div className="shape-2 p-relative">
                        <Image src={support_img_3} alt="theme-pure" />
                     </div>
                     <Image className="shape-3" src={support_shape} alt="theme-pure" />
                  </div>
               </div>
            </div>
         </div>
      </section>

       {/* video modal start */}
       <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"dGcsHMXbSOA"}
      />
      {/* video modal end */}
        </>
    )
}
export default SupportArea;