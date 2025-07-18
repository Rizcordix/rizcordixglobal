'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LineArrowThree from '@/src/svg/line-arrow3';

const BlogArea = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blog')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error('Error fetching blogs:', err));
  }, []);

  return (
    <section className="tp-blog-3-area pt-100 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                            <div className="tp-blog-title-wrapper">
                                <h3 className="tp-section-title">Recent Blog & News in <span className="title-color">Company</span>
                                    <span className="title-right-shape"> 
                                        <LineArrowThree />
                                    </span>
                                </h3>
                            </div>
                            </div>
                            <div className="col-lg-6">
                            <div className="tp-blog-text justify-content-start justify-content-lg-end d-flex">
                                <p>As the demand for digital solutions increases, Rizcordix Global Pvt Ltd  
                                    <br /> offers multi-disciplinary services with creative and technical expertise.</p>
                            </div>
                            </div>
                        </div>
                    </div>


          {blogs.slice(0, 3).map((item, i) => (
            <div key={i} className="col-xl-4 col-md-6">
              <article className="tp-blog-3-wrapper mb-30 OneByOne">
                <div
                  className="tp-blog-3-thumb"
                  style={{
                    height: '250px',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    marginBottom: '20px'
                  }}
                >
                  <Link href={`/blog/${item.BlogID}`}>
                    {item.Image1 ? (
                      <Image
                        src={`data:image/jpeg;base64,${item.Image1}`}
                        alt={item.MainTitle}
                        width={400}
                        height={250}
                        style={{
                          width: '100%',
                          height: '250px',
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: '100%',
                          height: '250px',
                          backgroundColor: '#eee',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: '#999',
                          fontStyle: 'italic'
                        }}
                      >
                        No Image
                      </div>
                    )}
                  </Link>
                </div>
                <div className="tp-blog-3-content">
                  <div className="tp-blog-date">
                    <span>
                      <i className="fa-light fa-calendar-days"></i> {item.date}
                    </span>
                  </div>
                  <h3 className="tp-blog-3-title">
                    <Link href={`/blog/${item.BlogID}`}>{item.MainTitle}</Link>
                  </h3>
                </div>
                <div className="tp-blog-3-btn d-flex justify-content-between">
                  <div className="read-more p-relative">
                    <Link href={`/blog/${item.BlogID}`}>
                      Read More <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </div>
                  <div className="fvrt">
                    <span><i className="fa-light fa-heart"></i></span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
