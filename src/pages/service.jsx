import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Service from '../components/service';

const ServicePage = () => {
  const pageTitle = "Our Services";
  const pageDescription =
    "Rizcordix Global Pvt Ltd offers a wide range of services including creative content writing, UI/UX design, web development, app development, branding, animation, and more to help businesses grow in the digital world.";
  const pageUrl = "https://www.rizcordixglobal.com/service";
  const pageImage = "/service-image.png";  // Replace with the actual image URL

  const keywords =
    "Rizcordix, Rizcordix Global Pvt Ltd, services, creative writing, UI/UX design, web development, app development, branding, animation, video editing, content writing, digital marketing services, graphic design, pitch deck design, presentation design";
  const longTailKeywords =
    "creative content writing services, UI/UX design services, web development services, app development solutions, branding and animation services, graphic design services, professional pitch deck design, business presentation services, digital marketing agency services";

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
      <Service />
    </Wrapper>
  );
};

export default ServicePage;
