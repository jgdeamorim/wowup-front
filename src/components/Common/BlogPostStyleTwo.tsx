"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogPostStyleTwo: React.FC = () => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Latest News</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog4.jpg"
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>

                  <div className="date">
                    <i className="bx bx-calendar"></i> Feb 14, 2023
                  </div>
                </div>

                <div className="post-content">
                  <h3>
                    <Link href="/blog/details">
                      50 world-changing people, We lost in the 2010s
                    </Link>
                  </h3>

                  <div className="post-info">
                    <div className="post-by">
                      <Image
                        src="/images/author/author4.jpg"
                        alt="image"
                        width={85}
                        height={85}
                      />
                      <h6>Sarah Taylor</h6>
                    </div>

                    <div className="details-btn">
                      <Link href="/blog/details">
                        <i className="bx bx-right-arrow-alt"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog5.jpg"
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>

                  <div className="date">
                    <i className="bx bx-calendar"></i> Feb 16, 2023
                  </div>
                </div>

                <div className="post-content">
                  <h3>
                    <Link href="/blog/details">
                      Don't buy a tech gift until you read these rules
                    </Link>
                  </h3>

                  <div className="post-info">
                    <div className="post-by">
                      <Image
                        src="/images/author/author5.jpg"
                        alt="image"
                        width={85}
                        height={85}
                      />
                      <h6>Michel John</h6>
                    </div>

                    <div className="details-btn">
                      <Link href="/blog/details">
                        <i className="bx bx-right-arrow-alt"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/blog/blog6.jpg"
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>

                  <div className="date">
                    <i className="bx bx-calendar"></i> Feb 18, 2023
                  </div>
                </div>

                <div className="post-content">
                  <h3>
                    <Link href="/blog/details">
                      The golden rule of buying a phone as a gift
                    </Link>
                  </h3>

                  <div className="post-info">
                    <div className="post-by">
                      <Image
                        src="/images/author/author6.jpg"
                        alt="image"
                        width={85}
                        height={85}
                      />
                      <h6>Lucy Eva</h6>
                    </div>

                    <div className="details-btn">
                      <Link href="/blog/details">
                        <i className="bx bx-right-arrow-alt"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostStyleTwo;
