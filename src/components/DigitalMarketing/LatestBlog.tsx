"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const LatestBlog: React.FC = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-70 bg-f4e9da">
        <div className="container">
          <div className="section-title text-left">
            <span className="sub-title">Our News</span>
            <h2>Check Out Our Latest Blog</h2>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="blog-slides"
          >
            <SwiperSlide>
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog10.jpg"
                      alt="image"
                      width={790}
                      height={530}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <Link href="/blog" className="category">
                    Education
                  </Link>

                  <h3>
                    <Link href="/blog/details">
                      University Admissions Could Face Emergency Controls
                    </Link>
                  </h3>

                  <ul className="post-content-footer d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <Image
                          src="/images/author/author9.jpg"
                          className="rounded-circle"
                          alt="image"
                          width={85}
                          height={85}
                        />
                        <span>Alex Morgan</span>
                      </div>
                    </li>
                    <li>
                      <i className="bx bx-calendar"></i> April 30, 2023
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog11.jpg"
                      alt="image"
                      width={790}
                      height={530}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <Link href="/blog" className="category">
                    SEO
                  </Link>

                  <h3>
                    <Link href="/blog/details">
                      Online Learning Can Prepare Students For A Fast-Changing
                    </Link>
                  </h3>

                  <ul className="post-content-footer d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <Image
                          src="/images/author/author8.jpg"
                          className="rounded-circle"
                          alt="image"
                          width={95}
                          height={95}
                        />
                        <span>James Smith</span>
                      </div>
                    </li>
                    <li>
                      <i className="bx bx-calendar"></i> April 29, 2023
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog12.jpg"
                      alt="image"
                      width={790}
                      height={530}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <Link href="/blog" className="category">
                    Business
                  </Link>

                  <h3>
                    <Link href="/blog/details">
                      As Learning Moves Online, Trigger Warnings Must Too Much
                    </Link>
                  </h3>

                  <ul className="post-content-footer d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <Image
                          src="/images/author/author7.jpg"
                          className="rounded-circle"
                          alt="image"
                          width={95}
                          height={95}
                        />
                        <span>Sarah Taylor</span>
                      </div>
                    </li>
                    <li>
                      <i className="bx bx-calendar"></i> April 28, 2023
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-blog-post-item">
                <div className="post-image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog13.jpg"
                      alt="image"
                      width={790}
                      height={530}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <Link href="/blog" className="category">
                    Business
                  </Link>

                  <h3>
                    <Link href="/blog/details">
                      How To Secure Remote Workers During The COVID-19 Outbreak
                    </Link>
                  </h3>

                  <ul className="post-content-footer d-flex justify-content-between align-items-center">
                    <li>
                      <div className="post-author d-flex align-items-center">
                        <Image
                          src="/images/author/author6.jpg"
                          className="rounded-circle"
                          alt="image"
                          width={85}
                          height={85}
                        />
                        <span>Andro Lucy</span>
                      </div>
                    </li>
                    <li>
                      <i className="bx bx-calendar"></i> April 27, 2023
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default LatestBlog;
