"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const ClientsFeedbackSlider: React.FC = () => {
  return (
    <>
      <div className="feedback-area ptb-100 bg-white">
        <div className="container">
          <div className="section-title">
            <h2>
              Whats Our Clients Said About <span>Hepro</span>
            </h2>
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
              1024: {
                slidesPerView: 2,
              },
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="feedback-slides"
          >
            <SwiperSlide>
              <div className="single-feedback-item">
                <Image
                  src="/images/feedback/feedback1.png"
                  alt="image"
                  width={180}
                  height={360}
                />

                <div className="feedback-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse.
                  </p>

                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>

                  <div className="client-info">
                    <h3>Sarah Taylor</h3>
                    <span>CEO at Envato</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-item">
                <Image
                  src="/images/feedback/feedback2.png"
                  alt="image"
                  width={180}
                  height={360}
                />

                <div className="feedback-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse.
                  </p>

                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>

                  <div className="client-info">
                    <h3>Olivar Lucy</h3>
                    <span>CEO at EnvyTheme</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-item">
                <Image
                  src="/images/feedback/feedback3.png"
                  alt="image"
                  width={180}
                  height={360}
                />

                <div className="feedback-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse.
                  </p>

                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                    <i className="bx bxs-star"></i>
                  </div>

                  <div className="client-info">
                    <h3>Steven Smith</h3>
                    <span>CEO at Envato</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ClientsFeedbackSlider;
