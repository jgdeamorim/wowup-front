"use client";
  
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="banner-section chatbot-main-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="banner-content">
                <div className="content">
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
                    className="banner-content-slides"
                  >
                    <SwiperSlide>
                      <div className="inner-content">
                        <h1>Jump with us to build your brand</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor dolore magna aliqua. Quis
                          ipsum suspendisse ultrices gravida. Risus commodo
                          viverra maecenas accumsan lacus vel facilisis.
                        </p>

                        <Link href="/contact" className="default-btn">
                          <i className="bx bxs-hot"></i>
                          Try It Free Now
                          <span></span>
                        </Link>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="inner-content">
                        <h1>Build your brand for customers</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor dolore magna aliqua. Quis
                          ipsum suspendisse ultrices gravida. Risus commodo
                          viverra maecenas accumsan lacus vel facilisis.
                        </p>

                        <Link href="/contact" className="default-btn">
                          <i className="bx bxs-hot"></i>
                          Try It Free Now
                          <span></span>
                        </Link>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="banner-img bg-3">
                <div className="chat-wrapper">
                  <div className="chat">
                    <div className="chat-container">
                      <div className="chat-listcontainer">
                        <ul className="chat-message-list">
                          <li className="message-right ms1">
                            <div className="messageinner-ms1">
                              <Image
                                src="/images/author/author6.jpg"
                                alt="Image"
                                width={85}
                                height={85}
                              />

                              <span className="message-text">
                                👋 Hi! I'm a Hepro. Let me know if you have any
                                questions regarding our tool or set up a demo to
                                learn more!
                                <span className="message-time">19:58</span>
                              </span>
                            </div>
                          </li>

                          <li className="message-left ms2">
                            <div className="messageinner-ms2">
                              <Image
                                src="/images/author/author7.jpg"
                                alt="Image"
                                width={85}
                                height={85}
                              />

                              <span className="message-text">
                                I have a Question
                                <span className="message-time">19:58</span>
                              </span>
                            </div>
                          </li>

                          <li className="message-right ms3">
                            <div className="messageinner-ms3">
                              <Image
                                src="/images/author/author6.jpg"
                                alt="Image"
                                width={85}
                                height={85}
                              />
                              <span className="message-text">
                                Sure! Ask me anything!
                                <span className="message-time">19:58</span>
                              </span>
                            </div>
                          </li>

                          <li className="message-left ms4">
                            <div className="messageinner-ms4">
                              <Image
                                src="/images/author/author7.jpg"
                                alt="Image"
                                width={85}
                                height={85}
                              />
                              <span className="message-text">
                                What are you doing?
                                <span className="message-time">19:58</span>
                              </span>
                            </div>
                          </li>

                          <li className="message-right ms5">
                            <div className="messageinner-ms5">
                              <Image
                                src="/images/author/author6.jpg"
                                alt="Image"
                                width={85}
                                height={85}
                              />
                              <span className="message-text">
                                I'm great! I would love to get to better
                                understand how you're doing and your needs, so I
                                can best tell you how I can help you. Let me get
                                some contact details.
                                <span className="message-time">19:58</span>
                              </span>
                            </div>
                          </li>

                          <li className="message-left ms6">
                            <div className="messageinner-ms6">
                              <Image
                                src="/images/author/author7.jpg"
                                alt="Image"
                                width={85}
                                height={85}
                              />
                              <span className="message-text">
                                Could you describe EnvyTheme in one sentence?
                                <span className="message-time">19:58</span>
                              </span>
                            </div>
                          </li>

                          <li className="message-right ms7">
                            <div className="messageinner-ms7">
                              <Image
                                src="/images/author/author6.jpg"
                                alt="Image"
                                width={85}
                                height={85}
                              />
                              <span className="message-text">
                                EnvyTheme.com | Premium High-Quality Items
                                Design+Dev! Buy all exciting premium templates
                                and themes from EnvyTheme!, Thank You!❤️
                                <span className="message-time">19:58</span>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <Image
                  src="/images/banner-img3.jpg"
                  alt="Image"
                  width={846}
                  height={846}
                />
              </div>
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
