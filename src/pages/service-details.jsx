import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import ServiceDetails from '../components/service-details';

const ServiceDetailsPage = () => {
  const pageTitle = "Service Details";
  const pageDescription =
    "Learn more about the individual services offered by Rizcordix Global Pvt Ltd, including in-depth details on content writing, UI/UX design, web development, app development, branding, animation, and more.";
  const pageUrl = "https://www.rizcordixglobal.com/service_detail";
  const pageImage = "/service-image.png";  // Replace with the actual image URL

  const keywords =
    "Rizcordix, Rizcordix Global Pvt Ltd, service details, content writing services, UI/UX design services, web development services, app development services, branding services, animation services, video editing services, custom service solutions";
  const longTailKeywords =
    "content writing service details, UI/UX design detailed services, web development solutions details, custom app development services, branding strategy details, professional animation and video editing services";

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
      <ServiceDetails />
    </Wrapper>
  );
};

export default ServiceDetailsPage;
