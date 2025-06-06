"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const CaseStudies: React.FC = () => {
  return (
    <>
      <div className="case-studies-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-left">
            <span className="sub-title">Case Studies</span>
            <h2>Check of our some recent works & case studies</h2>
          </div>
        </div>

        <div className="container-fluid">
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
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination]}
            className="case-studies-slides"
          >
            <SwiperSlide>
              <div className="single-case-studies-item">
                <Link href="/services/details" className="image d-block">
                  <Image
                    src="/images/case-studies/case-studies-img1.jpg"
                    alt="image"
                    width={590}
                    height={560}
                  />
                </Link>
                <div className="content">
                  <h3>
                    <Link href="/services/details">
                      Customer Satisfaction for a Digital Marketing Agency
                    </Link>
                  </h3>
                  <Link href="/services/details" className="link-btn">
                    <i className="bx bx-right-arrow-alt"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-case-studies-item">
                <Link href="/services/details" className="image d-block">
                  <Image
                    src="/images/case-studies/case-studies-img2.jpg"
                    alt="image"
                    width={590}
                    height={560}
                  />
                </Link>
                <div className="content">
                  <h3>
                    <Link href="/services/details">
                      Return on Investment for Various Digital Marketing
                    </Link>
                  </h3>
                  <Link href="/services/details" className="link-btn">
                    <i className="bx bx-right-arrow-alt"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-case-studies-item">
                <Link href="/services/details" className="image d-block">
                  <Image
                    src="/images/case-studies/case-studies-img3.jpg"
                    alt="image"
                    width={590}
                    height={560}
                  />
                </Link>
                <div className="content">
                  <h3>
                    <Link href="/services/details">
                      Google Search Engine Marketing Case Study
                    </Link>
                  </h3>
                  <Link href="/services/details" className="link-btn">
                    <i className="bx bx-right-arrow-alt"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-case-studies-item">
                <Link href="/services/details" className="image d-block">
                  <Image
                    src="/images/case-studies/case-studies-img4.jpg"
                    alt="image"
                    width={590}
                    height={560}
                  />
                </Link>
                <div className="content">
                  <h3>
                    <Link href="/services/details">
                      Analysis of New Product Launch Using Google
                    </Link>
                  </h3>
                  <Link href="/services/details" className="link-btn">
                    <i className="bx bx-right-arrow-alt"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-case-studies-item">
                <Link href="/services/details" className="image d-block">
                  <Image
                    src="/images/case-studies/case-studies-img5.jpg"
                    alt="image"
                    width={590}
                    height={560}
                  />
                </Link>
                <div className="content">
                  <h3>
                    <Link href="/services/details">
                      Social Media Strategies for Online Shopping Cart
                    </Link>
                  </h3>
                  <Link href="/services/details" className="link-btn">
                    <i className="bx bx-right-arrow-alt"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
