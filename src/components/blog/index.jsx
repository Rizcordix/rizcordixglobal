import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import PostboxArea from "./postbox-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";

const Blog = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb top_title="Blog Page" page_title="Blog" />
        <PostboxArea />
        {/* <FooterContact bg_style={true} /> */}
      </main>
      <FooterThree />
    </>
  );
};

export default Blog;
