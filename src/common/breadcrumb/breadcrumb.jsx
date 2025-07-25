import React from "react";
import Link from "next/link";
import Image from "next/image";
import breadcrumb_img from "@assets/img/breadcrumb/titile.svg";

const Breadcrumb = ({top_title = "Our Company", page_title = "Our Company"}) => {
  return (
    <>
      <section
        className="breadcrumb__area breadcrumb-style pt-190 pb-210 p-relative z-index-1"
        style={{backgroundImage: `url(/assets/img/breadcrumb/hello2.png)`}}>
        <div className="breadcrumb__bg-overlay m-img"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="breadcrumb__content text-center">
                <h3 className="breadcrumb__title" style={{color: "#fff"}}>
                  {top_title}
                  {/* <Image src={breadcrumb_img} alt="theme-pure" /> */}
                </h3>
                <div className="breadcrumb__list breadcrumb__list-translate" style={{color: "#fff"}}>
                  <span style={{color: "#fff"}}> <Link href="/">Home</Link> </span>
                  <span className="dvdr" style={{color: "#fff"}}> <i className="fa-regular fa-angle-right"></i> </span>
                  <span style={{color: "#fff"}}>{page_title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
