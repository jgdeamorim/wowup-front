"use client";
  
import React from "react";
import Image from "next/image";

const DownloadApp: React.FC = () => {
  return (
    <>
      <div className="app-download-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div
                className="app-download-image"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1200"
              >
                <Image
                  src="/images/mobile.png"
                  alt="image"
                  width={372}
                  height={465}
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="app-download-content">
                <span className="sub-title">Download App</span>
                <h2>Supporting your customers on the go with our mobile app</h2>

                <div className="btn-box">
                  <a
                    href="https://www.apple.com/app-store/"
                    className="apple-store-btn"
                    target="_blank"
                  >
                    <Image
                      src="/images/applestore.png"
                      alt="image"
                      width={35}
                      height={40}
                    />
                    Download on the
                    <span>Apple Store</span>
                  </a>
                  <a
                    href="https://play.google.com/store/apps"
                    className="play-store-btn"
                    target="_blank"
                  >
                    <Image
                      src="/images/playstore.png"
                      alt="image"
                      width={35}
                      height={40}
                    />
                    Get it on
                    <span>Google Play</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadApp;
