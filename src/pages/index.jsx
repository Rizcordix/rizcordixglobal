import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";

const Home = () => {
  const pageTitle = "";
  const pageDescription =
    "Rizcordix Global Pvt Ltd offers innovative and creative solutions for businesses, including content writing, UI/UX design, web development, branding, animation, and more. We help your business thrive in the digital age.";
  const pageUrl = "https://www.rizcordixglobal.com/";
  const pageImage = "/home-page-image.png";  // Replace with the actual image URL

  const keywords =
    "Rizcordix, Rizcordix Global Pvt Ltd, creative solutions, content writing, UI/UX design, web development, branding, animation, digital marketing, creative agency, business solutions";
  const longTailKeywords =
    "creative agency for businesses, content writing and branding services, UI/UX design solutions, web development services for businesses, innovative business solutions, animation and creative design services";

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
      <HomeOne />
    </Wrapper>
  );
};

export default Home;
