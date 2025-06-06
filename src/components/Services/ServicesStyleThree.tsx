"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServicesStyleThree: React.FC = () => {
  return (
    <>
      <section className="services-area pt-100 pb-70">
        <div className="container">
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

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="row m-0">
                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="content">
                      <h3>
                        <Link href="/services/details">Technical Support</Link>
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
                    <div className="image bg-5">
                      <Image
                        src="/images/marketing-agency/services-img5.jpg"
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
                        <Link href="/services/details">
                          SEO, Affiliate Marketing
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
                    <div className="image bg-6">
                      <Image
                        src="/images/marketing-agency/services-img6.jpg"
                        alt="image"
                        width={550}
                        height={367}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesStyleThree;
