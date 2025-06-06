"use client";
  
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="main-banner main-banner-two">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="main-banner-content">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="content">
                      <h1
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1200"
                      >
                        Solve Business Challenges With IT
                      </h1>
                      <p
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-duration="1200"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor dolore magna aliqua. Quis ipsum
                        suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis.
                      </p>

                      <Link
                        href="/contact"
                        className="default-btn"
                        data-aos="fade-right"
                        data-aos-delay="300"
                        data-aos-duration="1200"
                      >
                        <i className="bx bxs-hot"></i>
                        Get Started
                        <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <Swiper
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 6500,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                modules={[Pagination, Autoplay]}
                className="banner-image-slider"
              >
                <SwiperSlide
                  className="banner-image"
                  style={{
                    backgroundImage: `url(/images/banner-slider/banner-img1.jpg)`,
                  }}
                ></SwiperSlide>
                <SwiperSlide
                  className="banner-image"
                  style={{
                    backgroundImage: `url(/images/banner-slider/banner-img2.jpg)`,
                  }}
                ></SwiperSlide>
                <SwiperSlide
                  className="banner-image"
                  style={{
                    backgroundImage: `url(/images/banner-slider/banner-img3.jpg)`,
                  }}
                ></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape20">
          <Image
            src="/images/shape/shape19.png"
            alt="image"
            width={236}
            height={137}
          />
        </div>
        <div className="shape21">
          <Image
            src="/images/shape/shape20.png"
            alt="image"
            width={100}
            height={99}
          />
        </div>
        <div className="shape19">
          <Image
            src="/images/shape/shape18.png"
            alt="image"
            width={155}
            height={139}
          />
        </div>
        <div className="shape22">
          <Image
            src="/images/shape/shape21.png"
            alt="image"
            width={15}
            height={15}
          />
        </div>
        <div className="shape23">
          <Image
            src="/images/shape/shape22.svg"
            alt="image"
            width={21}
            height={20}
          />
        </div>
        <div className="shape24">
          <Image
            src="/images/shape/shape23.png"
            alt="image"
            width={18}
            height={18}
          />
        </div>
        <div className="shape26">
          <Image
            src="/images/shape/shape25.png"
            alt="image"
            width={74}
            height={64}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
