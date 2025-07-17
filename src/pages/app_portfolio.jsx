import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import AppPortfolio from "../components/app_portfolio";

const AppPortfolioPage = () => {
  const pageTitle = "App Development Portfolio";
  const pageDescription =
    "Explore our App Development portfolio at Rizcordix Global Pvt Ltd. We specialize in creating innovative, high-quality mobile applications tailored to meet business needs.";
  const pageUrl = "https://www.rizcordixglobal.com/app_portfolio";
  const pageImage = "/portfolio-image.png";  // Replace with the actual image URL

  const keywords =
    "Rizcordix, Rizcordix Global Pvt Ltd, App Development, mobile app development, custom apps, app portfolio, innovative apps, app development services, creative app solutions, app development agency UK";
  const longTailKeywords =
    "app development portfolio, mobile app development services, custom mobile apps, best app development agency, innovative app solutions, app design and development portfolio";

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
      <AppPortfolio />
    </Wrapper>
  );
};

export default AppPortfolioPage;
