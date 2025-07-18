import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import HeaderFour from "@/src/layout/headers/header-4";
import React from "react";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";
import BlogDetails from "@/src/components/blog-details/blog-details-postbox";
import styles from "../../../src/styles/index.scss";

const BlogDetail = ({ blog }) => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb top_title="Blog Details" page_title="Blog Details" />
        <BlogDetails blog={blog} /> {/* ✅ Pass the blog prop */}
      </main>
      <FooterThree />
    </>
  );
};

export default BlogDetail;
