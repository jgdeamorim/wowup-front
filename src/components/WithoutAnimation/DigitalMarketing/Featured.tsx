"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Featured: React.FC = () => {
  return (
    <>
      <div className="featured-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-featured-box">
                <Image
                  src="/images/marketing-agency/featured-img1.jpg"
                  alt="image"
                  width={660}
                  height={715}
                />
                <h3>Marketing Campaigns & Content Creation</h3>

                <Link href="/services/details" className="read-more-btn">
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </Link>

                <Link href="/services/details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-featured-box">
                <Image
                  src="/images/marketing-agency/featured-img2.jpg"
                  alt="image"
                  width={660}
                  height={715}
                />
                <h3>LInk Building & Local Search Strategy</h3>

                <Link href="/services/details" className="read-more-btn">
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </Link>

                <Link href="/services/details" className="link-btn"></Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-featured-box">
                <Image
                  src="/images/marketing-agency/featured-img3.jpg"
                  alt="image"
                  width={660}
                  height={715}
                />
                <h3>Search Optimization & Paid Advertising</h3>

                <Link href="/services/details" className="read-more-btn">
                  Read More <i className="bx bx-right-arrow-alt"></i>
                </Link>

                <Link href="/services/details" className="link-btn"></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
