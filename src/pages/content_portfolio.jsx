import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import PortfolioDetails from '../components/content_portfolio';

const ContentPortfolioPage = () => {
  const pageTitle = "Content Writing Portfolio";
  const pageDescription =
    "Explore our Content Writing Portfolio at Rizcordix Global Pvt Ltd. We specialize in creating high-quality, engaging content for websites, blogs, social media, and more, tailored to meet the needs of businesses.";
  const pageUrl = "https://www.rizcordixglobal.com/content_portfolio";
  const pageImage = "/portfolio-image.png";  // Replace with the actual image URL

  const keywords =
    "Rizcordix, Rizcordix Global Pvt Ltd, content writing portfolio, content creation, blog writing, website content, SEO content, copywriting, business content, professional writing services, creative writing";
  const longTailKeywords =
    "content writing services UK, SEO content writing, copywriting portfolio, professional blog writing, website content writing services, creative writing for businesses, high-quality content writing";

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

export default ContentPortfolioPage;
