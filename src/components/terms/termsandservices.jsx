import LineArrowTwo from "@/src/svg/line-arrow-2";
import RightSymbol from "@/src/svg/right-symbol";

const terms_data = {
  title: "Terms and Conditions",
  last_updated: "Last updated: January 2025",
  intro: {
    title: "Introduction",
    content: "Welcome to Rizcordix Global Pvt Ltd. These Terms and Conditions govern your use of our services, including Creative and Content Writing, Graphic and Illustration Designing, UI/UX Design and Web Development, App Design and Development, Branding and Merchandising, Animation and Video Editing, Digitizing, and Presentation and Pitch Deck Design. By accessing or using our services, you agree to comply with and be bound by these terms."
  },
  sections: [
    {
      title: "Services Provided",
      content: "Rizcordix Global Pvt Ltd offers the following services:",
      list: [
        "Creative and Content Writing",
        "Graphic and Illustration Designing", 
        "UI/UX Design and Web Development",
        "App Design and Development",
        "Branding and Merchandising",
        "Animation and Video Editing",
        "Digitizing",
        "Presentation and Pitch Deck Design"
      ],
      note: "All services provided will be subject to specific agreements between us and the client."
    },
    {
      title: "Account Registration",
      content: "To access certain services, users may need to register an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate and complete. You are responsible for the confidentiality of your account and password."
    },
    {
      title: "Use of Services", 
      content: "You agree to use our services only for lawful purposes and in accordance with the Terms outlined herein. You are prohibited from using our services for any illegal or unauthorized activities. All users must comply with relevant laws, rules, and regulations while using our services."
    },
    {
      title: "Intellectual Property",
      content: "All intellectual property rights, including trademarks, copyrights, and other proprietary rights related to the services provided by Rizcordix Global Pvt Ltd, belong to the company. You are not allowed to use, copy, or distribute any of our intellectual property without prior written consent."
    },
    {
      title: "Limitation of Liability",
      content: "Rizcordix Global Pvt Ltd is not liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the services, even if we have been advised of the possibility of such damages."
    },
    {
      title: "Payment Terms",
      content: "All payments for services rendered must be made in accordance with the agreed-upon terms. Failure to make timely payments may result in a suspension of services. Prices for services are subject to change, and we will notify clients accordingly."
    },
    {
      title: "Termination",
      content: "We reserve the right to terminate or suspend your access to the services at our discretion if you violate any of these Terms and Conditions or for any other reason that we determine to be necessary for the continued smooth operation of the company."
    },
    {
      title: "Amendments",
      content: "Rizcordix Global Pvt Ltd reserves the right to modify or update these Terms and Conditions at any time without prior notice. All changes will be effective immediately upon posting on the website."
    },
    {
      title: "Governing Law",
      content: "These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Kingdom. Any disputes will be resolved in the courts located within the United Kingdom."
    }
  ]
}

const TermsAndConditions = () => {
  return (
    <section className="tp-terms-conditions fix pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="tp-terms-wrapper">
              {/* Header */}
              <div className="tp-terms-header text-center mb-60">
                <h2 className="tp-section-title mb-20">
                  {terms_data.title}
                  <span className="title-left-shape">
                    <LineArrowTwo />
                  </span>
                </h2>
                <p className="tp-terms-updated text-muted">{terms_data.last_updated}</p>
              </div>

              {/* Introduction */}
              <div className="tp-terms-intro mb-50">
                <h3 className="tp-terms-section-title mb-25">
                  1. {terms_data.intro.title}
                </h3>
                <p className="tp-terms-content">{terms_data.intro.content}</p>
              </div>

              {/* Terms Sections */}
              <div className="tp-terms-sections">
                {terms_data.sections.map((section, index) => (
                  <div key={index} className="tp-terms-section mb-45">
                    <h3 className="tp-terms-section-title mb-25">
                      {index + 2}. {section.title}
                    </h3>
                    <p className="tp-terms-content mb-20">{section.content}</p>
                    
                    {section.list && (
                      <ul className="tp-terms-list mb-20">
                        {section.list.map((item, i) => (
                          <li key={i} className="tp-terms-list-item">
                            <span className="tp-terms-list-icon">
                              <RightSymbol />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {section.note && (
                      <p className="tp-terms-note text-muted">{section.note}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="tp-terms-footer pt-40 border-top">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <p className="tp-terms-footer-text mb-0">
                      If you have any questions about these Terms and Conditions, please contact us at{" "}
                      <a href="mailto:info@rizcordix.com" className="tp-terms-link">
                        info@rizcordix.com
                      </a>
                    </p>
                  </div>
                  <div className="col-md-4 text-md-end">
                    <p className="tp-terms-company mb-0">
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
        .tp-terms-conditions {
          background: #f8f9fa;
          min-height: 100vh;
        }

        .tp-terms-wrapper {
          background: #ffffff;
          border-radius: 12px;
          padding: 60px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          position: relative;
        }

        .tp-terms-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #05DAC3 0%, #05DAB1 100%);
          border-radius: 12px 12px 0 0;
        }

        .tp-terms-header .tp-section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0;
          position: relative;
        }

        .tp-terms-updated {
          font-size: 0.9rem;
          color: #6c757d;
          font-style: italic;
        }

        .tp-terms-section-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 1rem;
          padding-bottom: 8px;
          border-bottom: 2px solid #e9ecef;
        }

        .tp-terms-content {
          font-size: 1rem;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 1rem;
        }

        .tp-terms-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .tp-terms-list-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 12px;
          padding: 8px 0;
          font-size: 0.95rem;
          color: #4a5568;
        }

        .tp-terms-list-icon {
          margin-right: 12px;
          margin-top: 2px;
          color: #fbb304;
          flex-shrink: 0;
        }

        .tp-terms-note {
          font-size: 0.9rem;
          color: #6c757d;
          font-style: italic;
          padding: 15px;
          background: #f8f9fa;
          border-left: 4px solid #007bff;
          border-radius: 4px;
        }

        .tp-terms-footer {
          border-top: 1px solid #e9ecef !important;
          padding-top: 30px;
          margin-top: 40px;
        }

        .tp-terms-footer-text {
          color: #6c757d;
          font-size: 0.9rem;
        }

        .tp-terms-link {
          color: #007bff;
          text-decoration: none;
        }

        .tp-terms-link:hover {
          color: #0056b3;
          text-decoration: underline;
        }

        .tp-terms-company {
          color: #2c3e50;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .tp-terms-wrapper {
            padding: 40px 30px;
          }
          
          .tp-terms-header .tp-section-title {
            font-size: 2rem;
          }
          
          .tp-terms-section-title {
            font-size: 1.2rem;
          }
          
          .tp-terms-footer {
            text-align: center;
          }
          
          .tp-terms-footer .col-md-4 {
            text-align: center !important;
            margin-top: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default TermsAndConditions;