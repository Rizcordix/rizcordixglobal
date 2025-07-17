import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import PortfolioDetails from '../components/graphic_portfolio';

const GraphicPortfolioPage = () => {
  const pageTitle = "Graphic Design Portfolio";
  const pageDescription =
    "Explore our Graphic Design Portfolio at Rizcordix Global Pvt Ltd. We specialize in creating visually compelling designs, logos, illustrations, and branding materials to help businesses communicate their message effectively.";
  const pageUrl = "https://www.rizcordixglobal.com/graphic_portfolio";
  const pageImage = "/portfolio-image.png";  // Replace with the actual image URL

  const keywords =
    "Rizcordix, Rizcordix Global Pvt Ltd, graphic design portfolio, logo design, branding, illustration, creative design, visual design, branding materials, design agency UK, digital graphic design";
  const longTailKeywords =
    "graphic design portfolio UK, creative graphic design services, logo and branding design, professional graphic designer, branding and illustration portfolio, digital design solutions";

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

export default GraphicPortfolioPage;
