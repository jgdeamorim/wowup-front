"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServiceRightImageStyle: React.FC = () => {
  return (
    <>
      <section className="services-area bg-right-color ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="services-content">
              <div className="content left-content">
                <div className="icon">
                  <Image
                    src="/images/icon1.png"
                    alt="image"
                    width={50}
                    height={35}
                  />
                </div>

                <h2>
                  Path is here for faster way of connections with your customers
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida. Risus commodo viverra maecenas accumsan
                  lacus vel facilisis.
                </p>

                <Link href="/services/details" className="default-btn">
                  <i className="bx bxs-spreadsheet"></i>
                  Learn More
                  <span></span>
                </Link>
              </div>
            </div>

            <div className="services-image">
              <div className="image">
                <Image
                  src="/images/services/chat.png"
                  alt="image"
                  width={770}
                  height={547}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceRightImageStyle;
