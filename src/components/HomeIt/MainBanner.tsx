"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="main-banner main-banner-one">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="main-banner-content">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="content">
                      <h1
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1200"
                      >
                        Secure IT Solutions for a more secure environment
                      </h1>
                      <p
                        data-aos="fade-up"
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
                        data-aos="fade-up"
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
              <div className="banner-image mbanner-bg-one">
                <div className="d-table">
                  <div className="d-table-cell">
                    {/* Animate Image */}
                    <div
                      className="animate-banner-image"
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="1200"
                    >
                      <Image
                        src="/images/animate-banner-img1.jpg"
                        alt="image"
                        width={600}
                        height={600}
                      />
                    </div>
                  </div>
                </div>

                {/* For Small Device */}
                <Image
                  src="/images/banner-slider/banner-img1.jpg"
                  className="mbanner-img"
                  alt="image"
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
