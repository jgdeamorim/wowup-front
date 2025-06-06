"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServiceLefttImageStyle: React.FC = () => {
  return (
    <>
      <section className="services-area bg-left-color bg-f4f6fc ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="services-image">
              <div className="image">
                <Image
                  src="/images/services/chat2.png"
                  alt="image"
                  width={772}
                  height={550}
                />
              </div>
            </div>

            <div className="services-content">
              <div className="content">
                <div className="icon">
                  <Image
                    src="/images/icon1.png"
                    alt="image"
                    width={50}
                    height={35}
                  />
                </div>

                <h2>
                  The best Innovative Chatbot and automations are here to expand
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
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceLefttImageStyle;
