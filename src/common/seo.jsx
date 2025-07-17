import Head from "next/head";

const SEO = ({ pageTitle, pageDescription, pageUrl, pageImage, noIndex = false }) => (
  <>
    <Head>
      {/* Title */}
      <title>{pageTitle ? `${pageTitle} | Rizcordix Global Pvt Ltd` : 'Rizcordix Global Pvt Ltd'}</title>

      {/* Meta description */}
      <meta name="description" content={pageDescription || "Rizcordix Global Pvt Ltd offers a wide range of services including creative content writing, UI/UX design, web development, animation, and more to help businesses thrive in the digital age."} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={pageTitle ? `${pageTitle} | Rizcordix Global Pvt Ltd` : 'Rizcordix Global Pvt Ltd'} />
      <meta property="og:description" content={pageDescription || "Rizcordix Global Pvt Ltd offers a wide range of services including creative content writing, UI/UX design, web development, animation, and more to help businesses thrive in the digital age."} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl || "https://www.rizcordixglobal.com"} />
      <meta property="og:image" content={pageImage || "/default-image.png"} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle ? `${pageTitle} | Rizcordix Global Pvt Ltd` : 'Rizcordix Global Pvt Ltd'} />
      <meta name="twitter:description" content={pageDescription || "Rizcordix Global Pvt Ltd offers a wide range of services including creative content writing, UI/UX design, web development, animation, and more to help businesses thrive in the digital age."} />
      <meta name="twitter:image" content={pageImage || "/default-image.png"} />

      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;
