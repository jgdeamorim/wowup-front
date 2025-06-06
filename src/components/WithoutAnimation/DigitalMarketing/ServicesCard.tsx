"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServicesCard: React.FC = () => {
  return (
    <>
      <section className="services-area ptb-100">
        <div className="container">
          <div className="section-title text-left">
            <span className="sub-title">Services</span>
            <h2>Let's Check Our Services</h2>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="row m-0">
                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="content">
                      <h3>
                        <Link href="/services/details">
                          Social Media Marketing
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </p>

                      <Link href="/services/details" className="read-more-btn">
                        Read More <i className="bx bx-right-arrow-alt"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="image bg-1">
                      <Image
                        src="/images/marketing-agency/services-img1.jpg"
                        alt="image"
                        width={550}
                        height={367}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="row m-0">
                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="content">
                      <h3>
                        <Link href="/services/details">SEO Optimization</Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </p>

                      <Link href="/services/details" className="read-more-btn">
                        Read More <i className="bx bx-right-arrow-alt"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="image bg-2">
                      <Image
                        src="/images/marketing-agency/services-img2.jpg"
                        alt="image"
                        width={550}
                        height={367}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="row m-0">
                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="content">
                      <h3>
                        <Link href="/services/details">Advanced Analytics</Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </p>

                      <Link href="/services/details" className="read-more-btn">
                        Read More <i className="bx bx-right-arrow-alt"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="image bg-3">
                      <Image
                        src="/images/marketing-agency/services-img3.jpg"
                        alt="image"
                        width={550}
                        height={367}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="row m-0">
                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="content">
                      <h3>
                        <Link href="/services/details">Email Marketing</Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </p>

                      <Link href="/services/details" className="read-more-btn">
                        Read More <i className="bx bx-right-arrow-alt"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="image bg-4">
                      <Image
                        src="/images/marketing-agency/services-img4.jpg"
                        alt="image"
                        width={550}
                        height={367}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="services-btn-box">
                <Link href="/services3" className="default-btn">
                  <i className="bx bx-bullseye"></i>View All<span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesCard;
