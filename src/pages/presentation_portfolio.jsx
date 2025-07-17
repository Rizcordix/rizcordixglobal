import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import PortfolioDetails from '../components/presentation_portfolio';

const PresentationPortfolioPage = () => {
  const pageTitle = "Presentation Design Portfolio";
  const pageDescription =
    "Explore our Presentation Design Portfolio at Rizcordix Global Pvt Ltd. We specialize in creating impactful, visually engaging presentations for businesses and professionals to effectively communicate their ideas and messages.";
  const pageUrl = "https://www.rizcordixglobal.com/presentation_portfolio";
  const pageImage = "/portfolio-image.png";  // Replace with the actual image URL

  const keywords =
    "Rizcordix, Rizcordix Global Pvt Ltd, presentation design portfolio, presentation design services, business presentations, slide deck design, professional presentations, pitch deck design, creative presentation services, corporate presentation design";
  const longTailKeywords =
    "presentation design services, creative slide deck design, pitch deck design portfolio, business presentation services, professional presentation design, custom presentation slide design";

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

export default PresentationPortfolioPage;
