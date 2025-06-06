"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServiceLeftImageStyle: React.FC = () => {
  return (
    <>
      <div className="services-area bg-left-color bg-left-shape bg-f4f6fc ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="services-image">
              <div
                className="image"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1200"
              >
                <Image
                  src="/images/services/service2.png"
                  alt="image"
                  width={894}
                  height={582}
                />
              </div>
            </div>

            <div className="services-content it-service-content">
              <div className="content">
                <div className="icon">
                  <Image
                    src="/images/icon1.png"
                    alt="image"
                    width={50}
                    height={35}
                  />
                </div>

                <h2>Cloud Hosting Services</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      Cloud Databases
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      Hybrid Cloud
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      Email Servers
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      Website Hosting
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      File Storage
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-box">
                      <i className="bx bxs-badge-check"></i>
                      Backup Systems
                    </div>
                  </div>
                </div>

                <Link href="/services/details" className="default-btn">
                  <i className="bx bxs-spreadsheet"></i>
                  Learn More
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceLeftImageStyle;
