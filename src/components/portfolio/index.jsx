import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import PortfolioArea from "./portfolio-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";

const Portfolio = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb top_title="Portfolio"  page_title="Portfolio" />
        <PortfolioArea />
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default Portfolio;

