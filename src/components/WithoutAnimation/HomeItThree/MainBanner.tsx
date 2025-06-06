"use client";
  
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const MainBanner: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="banner-section">
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
                      <div className="inner-content plr-15">
                        <h1>Web And Mobile App Development</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor dolore magna aliqua. Quis
                          ipsum suspendisse ultrices gravida. Risus commodo
                          viverra maecenas accumsan lacus vel facilisis.
                        </p>

                        <Link href="/contact" className="default-btn">
                          <i className="bx bxs-hot"></i>
                          Contact Us
                          <span></span>
                        </Link>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="inner-content plr-15">
                        <h1>Solve Business Challenges With IT</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor dolore magna aliqua. Quis
                          ipsum suspendisse ultrices gravida. Risus commodo
                          viverra maecenas accumsan lacus vel facilisis.
                        </p>

                        <Link href="/contact" className="default-btn">
                          <i className="bx bxs-hot"></i>
                          Contact Us
                          <span></span>
                        </Link>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="banner-img banner-video">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="video-box">
                      <div
                        className="video-btn"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="bx bx-play"></i>
                      </div>

                      {/* Shape Images */}
                      <div className="shape1">
                        <Image
                          src="/images/shape/shape1.png"
                          alt="image"
                          width={90}
                          height={90}
                        />
                      </div>
                      <div className="shape2">
                        <Image
                          src="/images/shape/shape2.png"
                          alt="image"
                          width={119}
                          height={119}
                        />
                      </div>
                      <div className="shape3">
                        <Image
                          src="/images/shape/shape3.png"
                          alt="image"
                          width={120}
                          height={120}
                        />
                      </div>
                      <div className="shape4">
                        <Image
                          src="/images/shape/shape4.png"
                          alt="image"
                          width={159}
                          height={159}
                        />
                      </div>
                      <div className="shape5">
                        <Image
                          src="/images/shape/shape5.png"
                          alt="image"
                          width={190}
                          height={190}
                        />
                      </div>
                      <div className="shape6">
                        <Image
                          src="/images/shape/shape6.png"
                          alt="image"
                          width={41}
                          height={41}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
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
        <div className="shape25">
          <Image
            src="/images/shape/shape24.png"
            alt="image"
            width={12}
            height={11}
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
        <div className="shape20">
          <Image
            src="/images/shape/shape19.png"
            alt="image"
            width={236}
            height={137}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
