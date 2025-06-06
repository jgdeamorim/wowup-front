"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const Partner: React.FC = () => {
  return (
    <>
      <div className="partner-area ptb-100 bg-f8fbfa">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-12">
              <div className="partner-title">
                <h3>Featured by:</h3>
              </div>
            </div>

            <div className="col-lg-9 col-md-12">
              <Swiper
                slidesPerView={1}
                spaceBetween={50}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  576: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
                autoplay={{
                  delay: 6500,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay]}
                className="partner-slides"
              >
                <SwiperSlide className="single-partner-item">
                  <Image
                    src="/images/partner/partner1.png"
                    alt="image"
                    width={175}
                    height={40}
                  />
                </SwiperSlide>

                <SwiperSlide className="single-partner-item">
                  <Image
                    src="/images/partner/partner2.png"
                    alt="image"
                    width={175}
                    height={40}
                  />
                </SwiperSlide>

                <SwiperSlide className="single-partner-item">
                  <Image
                    src="/images/partner/partner3.png"
                    alt="image"
                    width={175}
                    height={40}
                  />
                </SwiperSlide>

                <SwiperSlide className="single-partner-item">
                  <Image
                    src="/images/partner/partner4.png"
                    alt="image"
                    width={175}
                    height={40}
                  />
                </SwiperSlide>

                <SwiperSlide className="single-partner-item">
                  <Image
                    src="/images/partner/partner2.png"
                    alt="image"
                    width={175}
                    height={40}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
