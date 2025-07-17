import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Contact from '../components/contact';

const ContactPage = () => {
  const pageTitle = "Contact Us";
  const pageDescription =
    "Get in touch with Rizcordix Global Pvt Ltd for any inquiries or collaboration opportunities. We are here to help with your creative needs, from content writing to UI/UX design, web development, branding, and more.";
  const pageUrl = "https://www.rizcordixglobal.com/contact";
  const pageImage = "/contact-page-image.png";  // Replace with the actual image URL

  const keywords =
    "Rizcordix, Rizcordix Global Pvt Ltd, contact us, get in touch, creative agency contact, UI/UX design contact, web development contact, branding agency contact, customer support, business inquiries, contact page";
  const longTailKeywords =
    "contact Rizcordix Global Pvt Ltd, contact for creative services, inquire about branding services, contact for UI/UX design, business inquiries for web development, customer support for creative solutions";

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
      <Contact />
    </Wrapper>
  );
};

export default ContactPage;
