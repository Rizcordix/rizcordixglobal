import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Portfolio from "../components/portfolio";

const PortfolioPage = () => {
  const pageTitle = "Portfolio";
  const pageDescription =
    "Explore the portfolio of Rizcordix Global Pvt Ltd. We showcase our best work in creative writing, UI/UX design, web development, branding, animation, and more.";
  const pageUrl = "https://www.rizcordixglobal.com/portfolio";
  const pageImage = "/portfolio-image.png";  // Replace with the actual image URL

  const keywords =
    "Rizcordix, RizcordixGlobal, Rizcordix Global Pvt Ltd, portfolio, creative writing, UI/UX design, web development, app development, branding, animation, digital marketing agency, creative agency UK";
  const longTailKeywords =
    "creative portfolio UK, web development portfolio, UI/UX design portfolio, branding and animation portfolio, digital marketing agency portfolio";

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
      <Portfolio />
    </Wrapper>
  );
};

export default PortfolioPage;
