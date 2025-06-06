"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const ClientsFeedbackSliderTwo: React.FC = () => {
  return (
    <>
      <div className="testimonials-area pt-100 pb-70">
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
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination]}
            className="testimonials-slides"
          >
            <SwiperSlide>
              <div className="single-testimonials-item">
                <div className="client-info">
                  <Image
                    src="/images/author/author5.jpg"
                    alt="image"
                    width={95}
                    height={95}
                  />
                  <h3>Michel John</h3>
                  <span>CEO at Envato</span>
                </div>

                <div className="testimonials-desc">
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
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <div className="client-info">
                  <Image
                    src="/images/author/author6.jpg"
                    alt="image"
                    width={85}
                    height={85}
                  />
                  <h3>Sarah Taylor</h3>
                  <span>CEO at EnvyTheme</span>
                </div>

                <div className="testimonials-desc">
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
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <div className="client-info">
                  <Image
                    src="/images/author/author7.jpg"
                    alt="image"
                    width={85}
                    height={85}
                  />
                  <h3>James Andy</h3>
                  <span>CEO at 3S</span>
                </div>

                <div className="testimonials-desc">
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
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <div className="client-info">
                  <Image
                    src="/images/author/author8.jpg"
                    alt="image"
                    width={85}
                    height={85}
                  />
                  <h3>James Andy</h3>
                  <span>CEO at 3S</span>
                </div>

                <div className="testimonials-desc">
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
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <div className="client-info">
                  <Image
                    src="/images/author/author9.jpg"
                    alt="image"
                    width={85}
                    height={85}
                  />
                  <h3>Sarah Taylor</h3>
                  <span>CEO at EnvyTheme</span>
                </div>

                <div className="testimonials-desc">
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
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ClientsFeedbackSliderTwo;
