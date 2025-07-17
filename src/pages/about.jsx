import SEO from "../common/seo";
import About from "../components/about";
import Wrapper from "../layout/wrapper";

const AboutUs = () => {
  const pageTitle = "About";
  const pageDescription =
    "Learn about Rizcordix Global Pvt Ltd, a leading creative agency in the UK offering creative and content writing, UI/UX design, web development, animation, and much more to help businesses thrive in the digital world.";
  const pageUrl = "https://www.rizcordixglobal.com/about";
  const pageImage = "/aboutimage.png";  // Replace with the actual image URL

  const keywords =
    "Rizcordix, RizcordixGlobal, Rizcordix Global Pvt Ltd, creative writing, UI/UX design, web development, app development, branding and merchandising, animation and video editing, digital marketing agency, creative agency UK";
  const longTailKeywords =
    "creative agency UK, digital marketing agency for branding, web development services, animation and video editing company, UI/UX design services in the UK";

  return (
    <Wrapper>
      <SEO
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageUrl={pageUrl}
        pageImage={pageImage}
        noIndex={false} // You can set this to true if the page should not be indexed
      >
        {/* Meta Keywords */}
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />

        {/* Meta for Longtail Keywords */}
        <meta name="keywords" content={longTailKeywords} />
      </SEO>
      <About />
    </Wrapper>
  );
};

export default AboutUs;
