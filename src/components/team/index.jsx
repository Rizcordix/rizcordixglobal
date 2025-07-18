import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import TeamMembers from "./team-members";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";

const Team = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb top_title="IT Advisor" page_title="Team" />
        <TeamMembers />
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default Team;
