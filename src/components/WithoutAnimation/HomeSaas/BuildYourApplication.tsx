"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const BuildYourApplication: React.FC = () => {
  return (
    <>
      <section className="services-area ptb-100 bg-f4f6fc">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="services-image">
              <div className="image">
                <Image
                  src="/images/home-saas/feature5.png"
                  alt="image"
                  width={900}
                  height={563}
                />
              </div>
            </div>

            <div className="services-content it-service-content">
              <div className="content">
                <div className="fun-facts-inner-content">
                  <h2>Build Beautiful Interface Into Your Application</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
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
                      Standard Coding Format
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

        <div className="shape9">
          <Image
            src="/images/shape/shape9.png"
            alt="image"
            width={90}
            height={90}
          />
        </div>
      </section>
    </>
  );
};

export default BuildYourApplication;
