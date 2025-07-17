import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import PortfolioDetails from '../components/ui_portfolio';

const UIUXPortfolioPage = () => {
  const pageTitle = "UI/UX Design Portfolio";
  const pageDescription =
    "Explore our UI/UX Design Portfolio at Rizcordix Global Pvt Ltd. We specialize in creating user-friendly, innovative UI/UX designs for websites and mobile apps, ensuring a seamless and engaging user experience.";
  const pageUrl = "https://www.rizcordixglobal.com/ui_portfolio";
  const pageImage = "/ui-portfolio-image.png";  // Replace with the actual image URL

  const keywords =
    "Rizcordix, Rizcordix Global Pvt Ltd, UI/UX design portfolio, UI design, UX design, web design, mobile app design, user experience design, user interface design, responsive web design, interactive design";
  const longTailKeywords =
    "UI/UX design services, user experience design for mobile apps, mobile UI design portfolio, professional UX design agency, responsive UI design for websites, custom web design solutions";

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
      <PortfolioDetails />
    </Wrapper>
  );
};

export default UIUXPortfolioPage;
