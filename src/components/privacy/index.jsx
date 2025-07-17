import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import PrivacyPolicy from "./privacydetails";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";

const Terms = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Privacy Policy" page_title="Details" />
        <PrivacyPolicy />
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default Terms;
