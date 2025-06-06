"use client";
  
import React from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import Image from 'next/image';

const BlogWithSidebar: React.FC = () => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-post">
                    <div className="post-image">
                      <Link href="/blog/details">
                        <Image
                          src="/images/blog/blog1.jpg"
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
                            src="/images/author/author1.jpg"
                            alt="image"
                            width={95}
                            height={95}
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

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-post">
                    <div className="post-image">
                      <Link href="/blog/details">
                        <Image
                          src="/images/blog/blog2.jpg"
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
                            src="/images/author/author2.jpg"
                            alt="image"
                            width={95}
                            height={95}
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

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-post">
                    <div className="post-image">
                      <Link href="/blog/details">
                        <Image
                          src="/images/blog/blog3.jpg"
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
                            src="/images/author/author3.jpg"
                            alt="image"
                            width={95}
                            height={95}
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

                <div className="col-lg-6 col-md-6">
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
                        <i className="bx bx-calendar"></i> Feb 19, 2023
                      </div>
                    </div>

                    <div className="post-content">
                      <h3>
                        <Link href="/blog/details">
                          Configure redux into your WordPress theme
                        </Link>
                      </h3>

                      <div className="post-info">
                        <div className="post-by">
                          <Image
                            src="/images/author/author4.jpg"
                            alt="image"
                            width={95}
                            height={95}
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

                <div className="col-lg-6 col-md-6">
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
                        <i className="bx bx-calendar"></i> Feb 20, 2023
                      </div>
                    </div>

                    <div className="post-content">
                      <h3>
                        <Link href="/blog/details">
                          How to setup redux in react next application
                        </Link>
                      </h3>

                      <div className="post-info">
                        <div className="post-by">
                          <Image
                            src="/images/author/author5.jpg"
                            alt="image"
                            width={95}
                            height={95}
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

                <div className="col-lg-6 col-md-6">
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
                        <i className="bx bx-calendar"></i> Feb 21, 2023
                      </div>
                    </div>

                    <div className="post-content">
                      <h3>
                        <Link href="/blog/details">
                          How to resubmit rejected item into themeforest?
                        </Link>
                      </h3>

                      <div className="post-info">
                        <div className="post-by">
                          <Image
                            src="/images/author/author5.jpg"
                            alt="image"
                            width={95}
                            height={95}
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

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-post">
                    <div className="post-image">
                      <Link href="/blog/details">
                        <Image
                          src="/images/blog/blog7.jpg"
                          alt="image"
                          width={860}
                          height={700}
                        />
                      </Link>

                      <div className="date">
                        <i className="bx bx-calendar"></i> Feb 22, 2023
                      </div>
                    </div>

                    <div className="post-content">
                      <h3>
                        <Link href="/blog/details">
                          How to resubmit rejected item into themeforest?
                        </Link>
                      </h3>

                      <div className="post-info">
                        <div className="post-by">
                          <Image
                            src="/images/author/author7.jpg"
                            alt="image"
                            width={95}
                            height={95}
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

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-post">
                    <div className="post-image">
                      <Link href="/blog/details">
                        <Image
                          src="/images/blog/blog8.jpg"
                          alt="image"
                          width={860}
                          height={700}
                        />
                      </Link>

                      <div className="date">
                        <i className="bx bx-calendar"></i> Feb 23, 2023
                      </div>
                    </div>

                    <div className="post-content">
                      <h3>
                        <Link href="/blog/details">
                          How to the active menu based on url in next.js?
                        </Link>
                      </h3>

                      <div className="post-info">
                        <div className="post-by">
                          <Image
                            src="/images/author/author8.jpg"
                            alt="image"
                            width={95}
                            height={95}
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

                {/* Pagination */}
                <div className="col-lg-12 col-md-12">
                  <div className="pagination-area">
                    <a href="#" className="prev page-numbers">
                      <i className="bx bxs-arrow-to-left"></i>
                    </a>

                    <a href="#" className="page-numbers">
                      1
                    </a>

                    <span className="page-numbers current">2</span>

                    <a href="#" className="page-numbers">
                      3
                    </a>

                    <a href="#" className="page-numbers">
                      4
                    </a>

                    <a href="#" className="next page-numbers">
                      <i className="bx bxs-arrow-to-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogWithSidebar;
