import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Terms from "../components/privacy";

const PrivacyPolicyPage = () => {
  const pageTitle = "Privacy Policy";
  const pageDescription =
    "Read the Privacy Policy for Rizcordix Global Pvt Ltd to understand how we collect, use, and protect your personal information. This page outlines our privacy practices and your rights regarding your data.";
  const pageUrl = "https://www.rizcordixglobal.com/privacypolicy";
  const pageImage = "/terms-image.png";  // Replace with the actual image URL

  const keywords =
    "Rizcordix, Rizcordix Global Pvt Ltd, privacy policy, data privacy, personal information, privacy practices, terms of data use, GDPR compliance, user data protection, privacy agreement";
  const longTailKeywords =
    "privacy policy Rizcordix Global, user data protection terms, GDPR compliance privacy policy, data collection and use, how we protect your data, personal information privacy policy";

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

export default PrivacyPolicyPage;
