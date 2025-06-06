"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const FreeTrialArea: React.FC = () => {
  return (
    <>
      <div className="free-trial-area pb-100 bg-f4f5fe">
        <div className="container">
          <div className="free-trial-content">
            <h2>We always try to be the best support to you as possible</h2>
            <p>
              Qualify your leads & recognize the value of word your customer
              will love you
            </p>

            <Link href="/contact" className="default-btn">
              <i className="bx bxs-hot"></i>
              Contact Us
              <span></span>
            </Link>
          </div>
        </div>

        {/* Shape Image */}
        <div className="shape10">
          <Image
            src="/images/shape/shape10.png"
            alt="image"
            width={58}
            height={58}
          />
        </div>
        <div className="shape11">
          <Image
            src="/images/shape/shape7.png"
            alt="image"
            width={106}
            height={55}
          />
        </div>
        <div className="shape12">
          <Image
            src="/images/shape/shape11.png"
            alt="image"
            width={150}
            height={150}
          />
        </div>
        <div className="shape13">
          <Image
            src="/images/shape/shape12.png"
            alt="image"
            width={117}
            height={117}
          />
        </div>
      </div>
    </>
  );
};

export default FreeTrialArea;
