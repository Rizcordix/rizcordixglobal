import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import PortfolioDetailsArea from "./detail";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";

const PortfolioDetails = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb top_title="Graphic Designing" page_title=" Portfolio Details" />
        <PortfolioDetailsArea />
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default PortfolioDetails;
