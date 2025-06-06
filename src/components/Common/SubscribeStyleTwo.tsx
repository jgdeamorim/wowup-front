"use client";
  
import React from "react";
import Image from "next/image";

const SubscribeStyleTwo: React.FC = () => {
  return (
    <>
      <div
        className="subscribe-area bg-f4f5fe"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1200"
      >
        <div className="container">
          <div className="subscribe-content">
            <h2>We always try to be the best support to you as possible</h2>

            <form className="newsletter-form">
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-8">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="hello@example.com"
                    name="email"
                    required
                  />
                </div>

                <div className="col-lg-4 col-md-4">
                  <button type="submit">
                    <i className="bx bxs-hot"></i>
                    Subscribe Now
                  </button>
                </div>
              </div>
            </form>

            {/* Shape Images */}
            <div className="shape14">
              <Image
                src="/images/shape/shape13.png"
                alt="image"
                width={126}
                height={110}
              />
            </div>
            <div className="shape15">
              <Image
                src="/images/shape/shape14.png"
                alt="image"
                width={77}
                height={96}
              />
            </div>
            <div className="shape16">
              <Image
                src="/images/shape/shape15.png"
                alt="image"
                width={145}
                height={105}
              />
            </div>
            <div className="shape17">
              <Image
                src="/images/shape/shape16.png"
                alt="image"
                width={150}
                height={86}
              />
            </div>
            <div className="shape18">
              <Image
                src="/images/shape/shape17.png"
                alt="image"
                width={45}
                height={45}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeStyleTwo;
