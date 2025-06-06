"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const FeedbackSlider: React.FC = () => {
  return (
    <>
      <section className="feedback-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="section-title text-left">
                <span className="sub-title">Testimonials</span>
                <h2>Our Customer Valuable Feedback</h2>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <Swiper
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                  delay: 6500,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                className="testimonials-slides-two"
              >
                <SwiperSlide>
                  <div className="single-testimonials-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum ultrices gravida. Risus commodo viverra
                      maecenas accumsan lacus vel facilisis. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt.
                    </p>

                    <div className="client-info">
                      <div className="d-flex align-items-center">
                        <Image
                          src="/images/user1.jpg"
                          alt="image"
                          width={300}
                          height={300}
                        />
                        <div className="title">
                          <h3>John Smith</h3>
                          <span>Python Developer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-testimonials-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum ultrices gravida. Risus commodo viverra
                      maecenas accumsan lacus vel facilisis. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt.
                    </p>

                    <div className="client-info">
                      <div className="d-flex align-items-center">
                        <Image
                          src="/images/user2.jpg"
                          alt="image"
                          width={300}
                          height={300}
                        />
                        <div className="title">
                          <h3>Sarah Taylor</h3>
                          <span>Web Developer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-testimonials-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum ultrices gravida. Risus commodo viverra
                      maecenas accumsan lacus vel facilisis. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt.
                    </p>

                    <div className="client-info">
                      <div className="d-flex align-items-center">
                        <Image
                          src="/images/user3.jpg"
                          alt="image"
                          width={300}
                          height={300}
                        />
                        <div className="title">
                          <h3>James Anderson</h3>
                          <span>Web Designer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeedbackSlider;
