import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import PortfolioDetailsArea from "./detail";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";

const PortfolioDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="UI_UX Designing" page_title=" Portfolio Details" />
        <PortfolioDetailsArea />
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default PortfolioDetails;
