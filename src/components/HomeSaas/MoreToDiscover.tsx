"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MoreToDiscover: React.FC = () => {
  return (
    <>
      <div className="ptb-100 bg-f4f6fc">
        <div className="container">
          <div className="section-title">
            <h2 className="mb-2">More to Discover</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div
          className="overview-item"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1200"
        >
          <div className="container max-width-1290">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="overview-left-img">
                  <Image
                    src="/images/home-saas/feature2.png"
                    alt="image"
                    width={700}
                    height={446}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="overview-content pl-3">
                  <span className="number">01</span>
                  <h3>Getting Started Page</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo.
                  </p>
                  <ul>
                    <li>
                      <i className="bx bx-badge-check"></i>
                      Unique Design
                    </li>
                    <li>
                      <i className="bx bx-badge-check"></i>
                      Unimited Video Call
                    </li>
                    <li>
                      <i className="bx bx-badge-check"></i>
                      Add Favourite contact
                    </li>
                    <li>
                      <i className="bx bx-badge-check"></i>
                      Camera Filter
                    </li>
                  </ul>

                  <Link
                    href="/services/details"
                    className="default-btn black-btn"
                  >
                    <i className="bx bxs-arrow-to-right"></i>
                    Read More
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="overview-item"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1200"
        >
          <div className="container max-width-1290">
            <div className="row align-items-center">
              {/* For mobile device */}
              <div className="col-lg-6 col-md-6 d-block d-md-none">
                <div className="overview-right-img mt-0 mb-4">
                  <Image
                    src="/images/home-saas/feature3.png"
                    alt="image"
                    width={677}
                    height={544}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="overview-content pl-3">
                  <span className="number">02</span>
                  <h3>Outdated Comments Toggling</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo.
                  </p>
                  <ul>
                    <li>
                      <i className="bx bx-badge-check"></i>
                      Mordan Design
                    </li>
                    <li>
                      <i className="bx bx-badge-check"></i>
                      Unimited Video Call
                    </li>
                    <li>
                      <i className="bx bx-badge-check"></i>
                      Add Favourite contact
                    </li>
                    <li>
                      <i className="bx bx-badge-check"></i>
                      Camera Filter
                    </li>
                    <li>
                      <i className="bx bx-badge-check"></i>
                      Outdated Comments
                    </li>
                  </ul>

                  <Link
                    href="/services/details"
                    className="default-btn black-btn"
                  >
                    <i className="bx bxs-arrow-to-right"></i>
                    Read More
                    <span></span>
                  </Link>
                </div>
              </div>

              {/* For other device */}
              <div className="col-lg-6 col-md-6 d-none d-md-block">
                <div className="overview-right-img">
                  <Image
                    src="/images/home-saas/feature3.png"
                    alt="image"
                    width={677}
                    height={544}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="overview-item"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          <div className="container max-width-1290">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="overview-left-img">
                  <Image
                    src="/images/home-saas/feature4.png"
                    alt="image"
                    width={620}
                    height={469}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="overview-content pl-3">
                  <span className="number">03</span>
                  <h3>Code Review Illustrations</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo.
                  </p>
                  <ul>
                    <li>
                      <i className="bx bx-badge-check"></i>
                      Professional Code
                    </li>
                    <li>
                      <i className="bx bx-badge-check"></i>
                      Unimited Video Call
                    </li>
                    <li>
                      <i className="bx bx-badge-check"></i>
                      Add Favourite contact
                    </li>
                    <li>
                      <i className="bx bx-badge-check"></i>
                      Camera Filter
                    </li>
                    <li>
                      <i className="bx bx-badge-check"></i>
                      Start Coding Format
                    </li>
                  </ul>

                  <Link
                    href="/services/details"
                    className="default-btn black-btn"
                  >
                    <i className="bx bxs-arrow-to-right"></i>
                    Read More
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreToDiscover;
