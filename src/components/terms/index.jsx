import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import TermsAndConditions from "./termsandservices";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";

const Terms = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Terms Of Services" page_title="Details" />
        <TermsAndConditions />
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default Terms;
