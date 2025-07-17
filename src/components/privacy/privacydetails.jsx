import LineArrowTwo from "@/src/svg/line-arrow-2";
import RightSymbol from "@/src/svg/right-symbol";

const privacy_data = {
  title: "Privacy Policy",
  last_updated: "Last updated: January 2025",
  intro: {
    title: "Introduction",
    content: "At Rizcordix Global Pvt Ltd, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you access or use our services. By using our services, you agree to the terms outlined in this Privacy Policy."
  },
  sections: [
    {
      title: "Information We Collect",
      content: "We collect personal information when you:",
      list: [
        "Register for an account",
        "Submit inquiries or requests for our services",
        "Communicate with our support or customer service team"
      ],
      additional_content: "The information we may collect includes:",
      additional_list: [
        "Name",
        "Email address",
        "Phone number",
        "Payment information",
        "IP address"
      ]
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to:",
      list: [
        "Provide and improve our services",
        "Communicate with you regarding updates, offers, or promotions related to our services",
        "Process transactions and billing information",
        "Respond to customer inquiries and support requests",
        "Analyze user behavior to improve the overall user experience"
      ]
    },
    {
      title: "Data Security",
      content: "We take reasonable precautions to protect your personal data from unauthorized access, disclosure, alteration, or destruction. However, no method of data transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
    },
    {
      title: "Sharing Your Information",
      content: "We do not share your personal information with third parties unless required to do so by law or to fulfill the terms of service. For example, we may share your data with third-party service providers who assist us in delivering our services, but these third parties are not authorized to use your personal data for other purposes."
    },
    {
      title: "Cookies and Tracking Technologies",
      content: "We use cookies and other tracking technologies to improve your experience while using our website. These technologies allow us to remember your preferences, analyze site traffic, and enhance the overall functionality of the website. You can disable cookies through your browser settings, but doing so may affect the functionality of the website."
    },
    {
      title: "Third-Party Links",
      content: "Our website may contain links to third-party websites. Rizcordix Global Pvt Ltd is not responsible for the privacy practices or content of such websites. We recommend reviewing their privacy policies before providing any personal information."
    },
    {
      title: "Your Rights",
      content: "You have the right to access, correct, or delete the personal information we hold about you. If you wish to exercise any of these rights, please contact us at info@rizcordix.com."
    },
    {
      title: "Changes to This Privacy Policy",
      content: "Rizcordix Global Pvt Ltd reserves the right to update or modify this Privacy Policy at any time. Any changes will be posted on our website, and the updated Privacy Policy will take effect immediately."
    },
    {
      title: "Contact Us",
      content: "If you have any questions about our Privacy Policy or how we handle your personal information, please contact us at info@rizcordix.com."
    }
  ]
}

const PrivacyPolicy = () => {
  return (
    <section className="tp-privacy-policy fix pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="tp-privacy-wrapper">
              {/* Header */}
              <div className="tp-privacy-header text-center mb-60">
                <h2 className="tp-section-title mb-20">
                  {privacy_data.title}
                  <span className="title-left-shape">
                    <LineArrowTwo />
                  </span>
                </h2>
                <p className="tp-privacy-updated text-muted">{privacy_data.last_updated}</p>
              </div>

              {/* Introduction */}
              <div className="tp-privacy-intro mb-50">
                <h3 className="tp-privacy-section-title mb-25">
                  1. {privacy_data.intro.title}
                </h3>
                <p className="tp-privacy-content">{privacy_data.intro.content}</p>
              </div>

              {/* Privacy Sections */}
              <div className="tp-privacy-sections">
                {privacy_data.sections.map((section, index) => (
                  <div key={index} className="tp-privacy-section mb-45">
                    <h3 className="tp-privacy-section-title mb-25">
                      {index + 2}. {section.title}
                    </h3>
                    <p className="tp-privacy-content mb-20">{section.content}</p>
                    
                    {section.list && (
                      <ul className="tp-privacy-list mb-20">
                        {section.list.map((item, i) => (
                          <li key={i} className="tp-privacy-list-item">
                            <span className="tp-privacy-list-icon">
                              <RightSymbol />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.additional_content && (
                      <>
                        <p className="tp-privacy-content mb-20">{section.additional_content}</p>
                        {section.additional_list && (
                          <ul className="tp-privacy-list mb-20">
                            {section.additional_list.map((item, i) => (
                              <li key={i} className="tp-privacy-list-item">
                                <span className="tp-privacy-list-icon">
                                  <RightSymbol />
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="tp-privacy-footer pt-40 border-top">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <p className="tp-privacy-footer-text mb-0">
                      Your privacy is important to us. For any privacy-related concerns, contact us at{" "}
                      <a href="mailto:info@rizcordix.com" className="tp-privacy-link">
                        info@rizcordix.com
                      </a>
                    </p>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <p className="tp-privacy-company mb-0">
                      <strong>Rizcordix Global Pvt Ltd</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tp-privacy-policy {
          background: #f8f9fa;
          min-height: 100vh;
        }

        .tp-privacy-wrapper {
          background: #ffffff;
          border-radius: 12px;
          padding: 60px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          position: relative;
        }

        .tp-privacy-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #05DAC3 0%, #05DAB1 100%);
          border-radius: 12px 12px 0 0;
        }

        .tp-privacy-header .tp-section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0;
          position: relative;
        }

        .tp-privacy-updated {
          font-size: 0.9rem;
          color: #6c757d;
          font-style: italic;
        }

        .tp-privacy-section-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 1rem;
          padding-bottom: 8px;
          border-bottom: 2px solid #e9ecef;
        }

        .tp-privacy-content {
          font-size: 1rem;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 1rem;
        }

        .tp-privacy-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .tp-privacy-list-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 12px;
          padding: 8px 0;
          font-size: 0.95rem;
          color: #4a5568;
        }

        .tp-privacy-list-icon {
          margin-right: 12px;
          margin-top: 2px;
          color: #fbb304;
          flex-shrink: 0;
        }

        .tp-privacy-footer {
          border-top: 1px solid #e9ecef !important;
          padding-top: 30px;
          margin-top: 40px;
        }

        .tp-privacy-footer-text {
          color: #6c757d;
          font-size: 0.9rem;
        }

        .tp-privacy-link {
          color: #28a745;
          text-decoration: none;
        }

        .tp-privacy-link:hover {
          color: #1e7e34;
          text-decoration: underline;
        }

        .tp-privacy-company {
          color: #2c3e50;
          font-size: 0.9rem;
        }

        /* Security Badge Styling */
        .tp-privacy-section:nth-child(4) .tp-privacy-content {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #28a745;
          position: relative;
        }

        .tp-privacy-section:nth-child(4) .tp-privacy-content::before {
          content: '🔒';
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 1.5rem;
        }

        /* Cookie Section Special Styling */
        .tp-privacy-section:nth-child(6) .tp-privacy-content {
          background: #fff3cd;
          padding: 15px;
          border-radius: 6px;
          border-left: 4px solid #ffc107;
        }

        /* Rights Section Highlight */
        .tp-privacy-section:nth-child(8) .tp-privacy-content {
          background: #d1ecf1;
          padding: 15px;
          border-radius: 6px;
          border-left: 4px solid #17a2b8;
        }

        @media (max-width: 768px) {
          .tp-privacy-wrapper {
            padding: 40px 30px;
          }
          
          .tp-privacy-header .tp-section-title {
            font-size: 2rem;
          }
          
          .tp-privacy-section-title {
            font-size: 1.2rem;
          }
          
          .tp-privacy-footer {
            text-align: center;
          }
          
          .tp-privacy-footer .col-md-4 {
            text-align: center !important;
            margin-top: 20px;
          }

          .tp-privacy-section:nth-child(4) .tp-privacy-content::before {
            top: 15px;
            right: 15px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default PrivacyPolicy;