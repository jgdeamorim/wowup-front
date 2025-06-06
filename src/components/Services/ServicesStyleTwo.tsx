"use client";
  
import React from "react";
import Link from "next/link";

const ServicesStyleTwo: React.FC = () => {
  return (
    <>
      <section className="features-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <i className="bx bx-conversation"></i>
                </div>
                <h3>IT Consultancy</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href="/services/details" className="read-more">
                  Read more
                  <i className="bx bx-right-arrow-alt"></i>
                </Link>

                <div className="back-icon">
                  <i className="bx bx-conversation"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <i className="bx bx-mobile"></i>
                </div>
                <h3>Mobile Applications</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href="/services/details" className="read-more">
                  Read more
                  <i className="bx bx-right-arrow-alt"></i>
                </Link>

                <div className="back-icon">
                  <i className="bx bx-mobile"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <i className="bx bxs-badge-check"></i>
                </div>
                <h3>IT Solutions</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href="/services/details" className="read-more">
                  Read more
                  <i className="bx bx-right-arrow-alt"></i>
                </Link>

                <div className="back-icon">
                  <i className="bx bxs-badge-check"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <i className="bx bx-laptop"></i>
                </div>
                <h3>Web Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href="/services/details" className="read-more">
                  Read more
                  <i className="bx bx-right-arrow-alt"></i>
                </Link>

                <div className="back-icon">
                  <i className="bx bx-laptop"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <i className="bx bx-cart"></i>
                </div>
                <h3>eCommerce</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href="/services/details" className="read-more">
                  Read more
                  <i className="bx bx-right-arrow-alt"></i>
                </Link>

                <div className="back-icon">
                  <i className="bx bx-cart"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <i className="bx bxs-dashboard"></i>
                </div>
                <h3>Project Management</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href="/services/details" className="read-more">
                  Read more
                  <i className="bx bx-right-arrow-alt"></i>
                </Link>

                <div className="back-icon">
                  <i className="bx bxs-dashboard"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <i className="bx bx-data"></i>
                </div>
                <h3>Web Hosting</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href="/services/details" className="read-more">
                  Read more
                  <i className="bx bx-right-arrow-alt"></i>
                </Link>

                <div className="back-icon">
                  <i className="bx bxs-bell-ring"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <i className="bx bxs-info-circle"></i>
                </div>
                <h3>Technical Support</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href="/services/details" className="read-more">
                  Read more
                  <i className="bx bx-right-arrow-alt"></i>
                </Link>

                <div className="back-icon">
                  <i className="bx bxs-info-circle"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="features-box">
                <div className="icon">
                  <i className="bx bx-cog"></i>
                </div>
                <h3>SEO, Affiliate Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href="/services/details" className="read-more">
                  Read more
                  <i className="bx bx-right-arrow-alt"></i>
                </Link>

                <div className="back-icon">
                  <i className="bx bx-cog"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesStyleTwo;
