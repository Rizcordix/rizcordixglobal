import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import TermsAndConditions from "./termsandservices";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";

const Terms = () => {
  return (
    <>
      <HeaderFour />
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
