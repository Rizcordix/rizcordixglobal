// src/components/blog-details.jsx

import Image from 'next/image';
import styles from "@assets/css/main.css";

const BlogDetails = ({ blog }) => {
  const getImage = (base64) =>
    base64 ? `data:image/jpeg;base64,${base64}` : null;

  const quoteStyle = {
    margin: '30px 0',
    padding: '20px 30px',
    backgroundColor: '#f8f9fa',
    borderLeft: '4px solid #05dac3',
    fontStyle: 'italic',
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#555',
    position: 'relative',
    fontFamily: 'Georgia, serif'
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '100px' }}>
      <article className="postbox__item format-image mb-50 transition-3">

        {/* Title */}
        <div className="postbox__content">
          <h1 className="postbox__title" style={{ fontSize: '60px', textAlign: 'center' }}>
            {blog.MainTitle}
          </h1>
        </div>

        {/* Main Image */}
        {blog.Image1 && (
          <div className="postbox__thumb m-img mb-30">
            <Image src={getImage(blog.Image1)} alt="Main" width={770} height={430} />
          </div>
        )}

        {/* Meta Info */}
        <div className="postbox__meta mb-30">
          <span><i className="fa-light fa-calendar-days"></i> {blog.date}</span>
          <span><i className="fa-light fa-user"></i> {blog.Author || 'Admin'}</span>
        </div>

        {/* Section 1 */}
        <div className="postbox__content">
          <h3 className="postbox__title">1. {blog.SubHeading1}</h3>
          <p>{blog.Paragraph1}</p>
          <p>{blog.Paragraph2}</p>
          {blog.Quote && <blockquote style={quoteStyle}>{blog.Quote}</blockquote>}
          {blog.Image2 && (
            <div className="postbox__thumb m-img mt-30 mb-30">
              <Image src={getImage(blog.Image2)} alt="Section 1" width={770} height={430} />
            </div>
          )}
        </div>

        {/* Section 2 */}
        <div className="postbox__content">
          <h3 className="postbox__title">2. {blog.SubHeading2}</h3>
          <p>{blog.Paragraph3}</p>
          <p>{blog.Paragraph4}</p>
          {blog.Image3 && (
            <div className="postbox__thumb m-img mt-30 mb-30">
              <Image src={getImage(blog.Image3)} alt="Section 2" width={770} height={430} />
            </div>
          )}
        </div>

        {/* Section 3 */}
        <div className="postbox__content">
          <h3 className="postbox__title">3. {blog.SubHeading3}</h3>
          <p>{blog.Paragraph5}</p>
          <p>{blog.Paragraph6}</p>
        </div>

        {/* Section 4 */}
        <div className="postbox__content">
          <h3 className="postbox__title">4. {blog.SubHeading4}</h3>
          <p>{blog.Paragraph7}</p>
          <p>{blog.Paragraph8}</p>
        </div>
        
      </article>
    </div>
  );
};

export default BlogDetails;