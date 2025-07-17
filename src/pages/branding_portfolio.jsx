import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import PortfolioDetails from '../components/branding_portfolio';

const BrandingPortfolioPage = () => {
  const pageTitle = "Branding Portfolio";
  const pageDescription =
    "Explore our Branding Portfolio at Rizcordix Global Pvt Ltd. We specialize in creating impactful branding strategies, designs, and marketing solutions for businesses looking to enhance their brand identity.";
  const pageUrl = "https://www.rizcordixglobal.com/branding_portfolio";
  const pageImage = "/portfolio-image.png";  // Replace with the actual image URL

  const keywords =
    "Rizcordix, Rizcordix Global Pvt Ltd, branding portfolio, brand identity, branding design, branding agency UK, marketing strategies, logo design, creative branding, visual branding, brand marketing";
  const longTailKeywords =
    "branding portfolio UK, creative branding agency, logo and brand identity design, visual branding solutions, branding strategies for businesses, branding and marketing portfolio";

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

export default BrandingPortfolioPage;
