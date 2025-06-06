"use client";
  
import React from "react";
import Link from "next/link";

const MainBanner: React.FC = () => {
  return (
    <>
      <div className="digital-agency-banner">
        <div className="container">
          <div className="digital-agency-banner-content">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              World Leading <span>Digital Marketing</span> Agency
            </h1>

            <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse
              ultrices gravida. Risus commodo viverra maecenas accumsan lacus
              vel facilisis.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <Link href="/contact" className="default-btn">
                <i className="bx bxs-hot"></i> Get Started Now <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
