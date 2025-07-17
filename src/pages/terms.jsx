import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Terms from "../components/terms";

const TermsPage = () => {
  const pageTitle = "Terms of Service";
  const pageDescription =
    "Read the Terms of Service for Rizcordix Global Pvt Ltd. Understand the legal agreements, terms, and conditions that govern the use of our services, including content writing, UI/UX design, web development, and more.";
  const pageUrl = "https://www.rizcordixglobal.com/terms";
  const pageImage = "/terms-image.png";  // Replace with the actual image URL

  const keywords =
    "Rizcordix, Rizcordix Global Pvt Ltd, terms of service, terms and conditions, legal agreement, terms of use, content writing, UI/UX design, web development, branding services";
  const longTailKeywords =
    "terms of service Rizcordix Global, legal agreement for services, terms and conditions for creative agency, content writing service terms, UI/UX design terms of service";

  return (
    <Wrapper>
      <SEO
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageUrl={pageUrl}
        pageImage={pageImage}
        noIndex={false} // Set to true if the page should not be indexed
      >
        {/* Meta Keywords */}
        <meta name="keywords" content={keywords} />

        {/* Meta Robots */}
        <meta name="robots" content="index, follow" />

        {/* Meta for Longtail Keywords */}
        <meta name="keywords" content={longTailKeywords} />
      </SEO>
      <Terms />
    </Wrapper>
  );
};

export default TermsPage;
