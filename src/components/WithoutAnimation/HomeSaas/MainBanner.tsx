"use client";
  
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
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

      <div className="saas-banner overflow-hidden z-n1">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container max-width-1290">
              <div className="row align-items-center pt-5">
                <div className="col-lg-6 col-md-12">
                  <div className="saas-image mt-70">
                    <Image
                      src="/images/saas-shape/arrow.png"
                      alt="arrow"
                      width={498}
                      height={405}
                      data-aos="fade-down"
                      data-aos-delay="50"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/saas-shape/box1.png"
                      alt="box1"
                      width={245}
                      height={232}
                      data-aos="fade-up"
                      data-aos-delay="50"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/saas-shape/boy1.png"
                      alt="boy1"
                      width={46}
                      height={123}
                      data-aos="fade-right"
                      data-aos-delay="50"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/saas-shape/boy2.png"
                      alt="boy2"
                      width={47}
                      height={116}
                      data-aos="zoom-in"
                      data-aos-delay="50"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/saas-shape/boy3.png"
                      alt="boy3"
                      width={54}
                      height={12}
                      data-aos="zoom-in"
                      data-aos-delay="50"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/saas-shape/digital-screen.png"
                      alt="Digital Screen"
                      width={104}
                      height={242}
                      data-aos="fade-down"
                      data-aos-delay="50"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/saas-shape/filter1.png"
                      alt="filter1"
                      width={69}
                      height={140}
                      data-aos="zoom-in"
                      data-aos-delay="50"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/saas-shape/filter2.png"
                      alt="filter2"
                      width={162}
                      height={178}
                      data-aos="fade-up"
                      data-aos-delay="50"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/saas-shape/filter3.png"
                      alt="filter3"
                      width={71}
                      height={141}
                      data-aos="fade-up"
                      data-aos-delay="50"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/saas-shape/girl1.png"
                      alt="girl1"
                      width={58}
                      height={122}
                      data-aos="fade-up"
                      data-aos-delay="50"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/saas-shape/girl2.png"
                      alt="girl2"
                      width={60}
                      height={120}
                      data-aos="zoom-in"
                      data-aos-delay="50"
                      data-aos-duration="1200"
                    />

                    <Image
                      src="/images/saas-shape/monitor.png"
                      alt="monitor"
                      width={209}
                      height={265}
                      data-aos="zoom-in"
                      data-aos-delay="50"
                      data-aos-duration="1200"
                    />

                    {/* Main image */}
                    <Image
                      src="/images/saas-shape/saas-main-image.png"
                      alt="Main image"
                      width={498}
                      height={528}
                      data-aos="zoom-in"
                      data-aos-delay="50"
                      data-aos-duration="1200"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="hero-content pl-4">
                    <h1>
                      Manage your business strategy in one placeholder
                    </h1>
                    <p>
                      Our passion to work hard and deliver excellent results. It
                      could solve the needs of your customers and develop
                      innovation. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod.
                    </p>

                    <div className="banner-btn">
                      <div className="d-flex">
                        <Link href="/contact" className="default-btn">
                          <i className="bx bxs-hot"></i>
                          Get Started
                          <span></span>
                        </Link>

                        <div
                          onClick={() => setToggler(!toggler)}
                          className="video-btn"
                        >
                          <i className="bx bxs-right-arrow"></i> Watch Video
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        <div className="shape-rotate rotateme">
          <Image
            src="/images/saas-shape/shape-rotate.png"
            alt="image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
