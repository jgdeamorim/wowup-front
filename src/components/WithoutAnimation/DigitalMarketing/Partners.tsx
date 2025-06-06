"use client";
  
import React from "react";
import Image from "next/image";

const Partners: React.FC = () => {
  return (
    <>
      <div className="partner-area-two ptb-70 bg-f9f9f9">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-2 col-6 col-sm-3 col-md-4">
              <div className="single-partner-box">
                <Image
                  src="/images/partner/partner5.png"
                  alt="image"
                  width={144}
                  height={22}
                />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-3 col-md-4">
              <div className="single-partner-box">
                <Image
                  src="/images/partner/partner6.png"
                  alt="image"
                  width={144}
                  height={22}
                />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-3 col-md-4">
              <div className="single-partner-box">
                <Image
                  src="/images/partner/partner7.png"
                  alt="image"
                  width={144}
                  height={22}
                />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-3 col-md-4">
              <div className="single-partner-box">
                <Image
                  src="/images/partner/partner8.png"
                  alt="image"
                  width={144}
                  height={22}
                />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-3 col-md-4">
              <div className="single-partner-box">
                <Image
                  src="/images/partner/partner9.png"
                  alt="image"
                  width={144}
                  height={22}
                />
              </div>
            </div>

            <div className="col-lg-2 col-6 col-sm-3 col-md-4">
              <div className="single-partner-box">
                <Image
                  src="/images/partner/partner10.png"
                  alt="image"
                  width={144}
                  height={22}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
