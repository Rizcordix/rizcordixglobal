import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import VideoPopup from '@/src/modals/video-popup';
import ServiceContactForm from '@/src/forms/service-contact-form';
import service_details_thumb from  "@assets/img/services/service-details/img-1.jpg";
import service_video_thumb from  "@assets/img/services/service-details/img-2.jpg";
import RightSymbol from '@/src/svg/right-symbol';
import accordion from '@/src/data/accordion';

const service_details_content = {
    service_details_tab: [
        {id: 1, title: "Creative Content Writing"},
        {id: 2, title: "Branding & Merchandising"},
        {id: 3, title: "UI/UX Design & Web Development"},
        {id: 4, title: "App Design & Development"},
        {id: 5, title: "Graphic & Illustration Design"},
        {id: 6, title: "Animation & Video Editing"},
        {id: 7, title: "Data Backup & Cloud Solutions"},
        {id: 8, title: "Web Design & E-commerce Solutions"},
    ],
    title: <>Digital Marketing</>,
    description: <>We offer comprehensive digital marketing strategies designed to increase your brand&apos;s online presence. Our services include SEO, social media marketing, and PPC management, all aimed at helping your business grow.</>,
    title_2: <>Why Marketing is Important?</>,
    description_2: <>Digital marketing allows you to reach a larger audience, build customer trust, and measure the impact of your campaigns. It is crucial for businesses to stay competitive and relevant in today&apos;s digital landscape.</>,
    feture_list: [
        <>Research beyond the business plan</>,
        <>Marketing options and rates</>,
        <>Consulting turnaround ability</>,
    ],
    description_3: <>Marketing is essential for any business looking to thrive in a competitive environment. Our digital marketing strategies are designed to increase brand visibility, engage customers, and drive measurable results. Whether it&apos;s content marketing, SEO, or social media management, we have the expertise to help your business succeed online.</>,
}

const {service_details_tab, title, description, title_2, description_2, feture_list, description_3} = service_details_content;

const ServiceDetailsArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  
  const handleTabClick = (e, id) => {
    e.preventDefault(); // Prevent default link behavior
    setActiveTab(id);
  }

  const getTabContent = () => {
    switch(activeTab) {
      case 1:
        return {
          title: "Creative Content Writing",
          description: "We create tailored content that engages your audience and strengthens your brand's presence across digital platforms.",
          img: service_details_thumb,
          whyTitle: "Why Quality Content Matters?",
          whyDescription: "Quality content builds trust, improves SEO rankings, and establishes your brand as an authority in your industry. It's the foundation of successful digital marketing.",
          whyImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&h=300&fit=crop",
          features: [
            "SEO-optimized content creation",
            "Brand voice development",
            "Multi-platform content strategy"
          ],
          finalDescription: "Our content writing services focus on creating compelling, SEO-friendly content that resonates with your target audience and drives engagement across all digital platforms."
        };
      case 2:
        return {
          title: "Branding & Merchandising",
          description: "Our branding services help define your business identity, including logo design and product packaging that align with your vision.",
          img: service_details_thumb,
          whyTitle: "Why Strong Branding is Essential?",
          whyDescription: "Strong branding differentiates your business, creates emotional connections with customers, and builds long-term loyalty and recognition in the marketplace.",
          whyImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop",
          features: [
            "Logo and visual identity design",
            "Brand guidelines development",
            "Merchandise and packaging design"
          ],
          finalDescription: "We help businesses create memorable brand identities that resonate with their target audience and stand out in competitive markets through comprehensive branding strategies."
        };
      case 3:
        return {
          title: "UI/UX Design & Web Development",
          description: "We design intuitive interfaces and provide robust web development to deliver high-performance, user-friendly websites.",
          img: service_details_thumb,
          whyTitle: "Why Great UI/UX Design Matters?",
          whyDescription: "Exceptional UI/UX design increases user satisfaction, reduces bounce rates, and improves conversion rates by creating seamless, intuitive user experiences.",
          whyImage: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&h=300&fit=crop",
          features: [
            "User-centered design approach",
            "Responsive web development",
            "Performance optimization"
          ],
          finalDescription: "Our UI/UX design and development services focus on creating websites that not only look great but also provide exceptional user experiences that drive business results."
        };
      case 4:
        return {
          title: "App Design & Development",
          description: "We create high-performance mobile apps, from design to development, ensuring they meet business objectives and provide a great user experience.",
          img: service_details_thumb,
          whyTitle: "Why Mobile Apps are Crucial?",
          whyDescription: "Mobile apps provide direct access to customers, improve engagement, and offer personalized experiences that can significantly boost customer retention and revenue.",
          whyImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
          features: [
            "Cross-platform development",
            "Native app performance",
            "App store optimization"
          ],
          finalDescription: "We develop mobile applications that combine beautiful design with robust functionality, ensuring your app stands out in crowded app stores and delivers value to users."
        };
      case 5:
        return {
          title: "Graphic & Illustration Design",
          description: "We offer graphic design and illustration services that communicate your brand's message through compelling visuals.",
          img: service_details_thumb,
          whyTitle: "Why Visual Design is Powerful?",
          whyDescription: "Visual design communicates messages instantly, creates emotional connections, and makes complex information easily digestible, significantly improving communication effectiveness.",
          whyImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=300&fit=crop",
          features: [
            "Custom illustration creation",
            "Brand-consistent graphics",
            "Multi-format design delivery"
          ],
          finalDescription: "Our graphic design and illustration services help businesses communicate their message effectively through stunning visuals that capture attention and convey brand values."
        };
      case 6:
        return {
          title: "Animation & Video Editing",
          description: "Our animation and video editing services create engaging visuals that help bring your ideas to life and connect with your audience.",
          img: service_details_thumb,
          whyTitle: "Why Video Content is Essential?",
          whyDescription: "Video content has higher engagement rates, improves information retention, and is favored by search engines, making it crucial for modern marketing strategies.",
          whyImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop",
          features: [
            "2D and 3D animation",
            "Professional video editing",
            "Motion graphics design"
          ],
          finalDescription: "We create compelling animated content and professionally edited videos that capture attention, tell your story effectively, and drive audience engagement across platforms."
        };
      case 7:
        return {
          title: "Data Backup & Cloud Solutions",
          description: "We provide reliable cloud and data backup solutions to protect your critical business information from loss.",
          img: service_details_thumb,
          whyTitle: "Why Data Protection is Critical?",
          whyDescription: "Data loss can be catastrophic for businesses. Reliable backup and cloud solutions ensure business continuity, protect against cyber threats, and enable remote accessibility.",
          whyImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
          features: [
            "Automated backup systems",
            "Cloud storage solutions",
            "Disaster recovery planning"
          ],
          finalDescription: "Our data backup and cloud solutions provide peace of mind by ensuring your critical business data is always protected, accessible, and recoverable in any situation."
        };
      case 8:
        return {
          title: "Web Design & E-commerce Solutions",
          description: "We design responsive websites and e-commerce solutions that provide a seamless user experience across all devices.",
          img: service_details_thumb,
          whyTitle: "Why Professional Web Design Matters?",
          whyDescription: "Professional web design builds credibility, improves user experience, and directly impacts conversion rates. It's your digital storefront and first impression.",
          whyImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
          features: [
            "Responsive design implementation",
            "E-commerce platform development",
            "Payment gateway integration"
          ],
          finalDescription: "We create professional websites and e-commerce platforms that not only look impressive but also drive sales and provide exceptional user experiences across all devices."
        };
      default:
        return {
          title: "Digital Marketing",
          description: "We offer comprehensive digital marketing strategies designed to increase your brand's online presence.",
          img: service_details_thumb,
          whyTitle: "Why Digital Marketing is Important?",
          whyDescription: "Digital marketing allows you to reach a larger audience, build customer trust, and measure the impact of your campaigns. It is crucial for businesses to stay competitive and relevant in today's digital landscape.",
          whyImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
          features: [
            "Research beyond the business plan",
            "Marketing options and rates",
            "Consulting turnaround ability"
          ],
          finalDescription: "Marketing is essential for any business looking to thrive in a competitive environment. Our digital marketing strategies are designed to increase brand visibility, engage customers, and drive measurable results."
        };
    }
  }

  const {title: tabTitle, description: tabDescription, img, whyTitle, whyDescription, whyImage, features, finalDescription} = getTabContent();

  return (
    <>
      <section className="tp-service-details-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="tp-service-widget">
                <div className="tp-service-widget-item mb-40">
                  <div className="tp-service-widget-tab">
                    <ul>
                      {service_details_tab.map((item, i) => 
                        <li key={i}>
                          <a 
                            className={activeTab === item.id ? "active" : ""} 
                            href="#" 
                            onClick={(e) => handleTabClick(e, item.id)}
                          >
                            {item.title} <i className="fa-regular fa-arrow-right-long"></i>
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-8">
              <div className="tp-service-details-wrapper">
                <div className="tp-service-details-thumb">
                  <Image src={img} alt="service-details" />
                </div>
                <h3 className="tp-service-details-title">{tabTitle}</h3>
                <p>{tabDescription}</p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="tp-service-details-thumb">
                      <Image src={whyImage} alt="service-image" width={500} height={300} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tp-service-details-list">
                      <h3 className="tp-service-details-title">{whyTitle}</h3>
                      <p>{whyDescription}</p>
                      <ul>
                        {features.map((item, i) => 
                          <li key={i}><span><RightSymbol /></span>{item}</li> 
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <p>{finalDescription}</p>

                <div className="tp-service-details-faq faq-style-1">
                  <div className="tp-faq-tab-content tp-accordion">
                    <div className="accordion" id="general_accordion">
                      {accordion.map((item, i) => 
                        <div key={i} className={`accordion-item`}>
                          <h2 className="accordion-header" id={`heading${item.accordion_id}`}>
                            <button 
                              className={`accordion-button ${item.collapsed}`} 
                              type="button" 
                              data-bs-toggle="collapse" 
                              data-bs-target={`#collapse${item.accordion_id}`} 
                              aria-expanded={item.aria_expanded}
                              aria-controls={`collapse${item.accordion_id}`}
                            >
                              {item.question}
                            </button>
                          </h2>
                          <div 
                            id={`collapse${item.accordion_id}`} 
                            className={`accordion-collapse collapse ${item?.active && "show"}`} 
                            aria-labelledby={`heading${item.accordion_id}`} 
                            data-bs-parent="#general_accordion"
                          >
                            <div className="accordion-body">
                              <p>{item.answer}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup 
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"csnD5EVL5z8"}
      />
      {/* video modal end */}
    </>
  );
};

export default ServiceDetailsArea;