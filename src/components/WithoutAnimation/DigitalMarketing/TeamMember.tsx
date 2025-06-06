"use client";
  
import React from "react";
import Image from "next/image";

const TeamMember: React.FC = () => {
  return (
    <>
      <div className="team-area-two pt-100 pb-70">
        <div className="container">
          <div className="section-title text-left">
            <span className="sub-title">Our Team</span>
            <h2>We Help to Acheive Your Business Goal</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-team-member">
                <div className="image">
                  <Image
                    src="/images/team/team13.jpg"
                    alt="team-image"
                    width={600}
                    height={600}
                  />

                  <ul className="social-link">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="content">
                  <h3>James Anderson</h3>
                  <span>CEO & Founder</span>
                  <i className="bx bx-share-alt"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-team-member">
                <div className="image">
                  <Image
                    src="/images/team/team14.jpg"
                    alt="team-image"
                    width={600}
                    height={600}
                  />

                  <ul className="social-link">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="content">
                  <h3>Sarah Taylor</h3>
                  <span>Marketing Lead</span>
                  <i className="bx bx-share-alt"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-team-member">
                <div className="image">
                  <Image
                    src="/images/team/team15.jpg"
                    alt="team-image"
                    width={600}
                    height={600}
                  />

                  <ul className="social-link">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="content">
                  <h3>Taylor Sopia</h3>
                  <span>Web Designer</span>
                  <i className="bx bx-share-alt"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-team-member">
                <div className="image">
                  <Image
                    src="/images/team/team16.jpg"
                    alt="team-image"
                    width={600}
                    height={600}
                  />

                  <ul className="social-link">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="d-block"
                        target="_blank"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="content">
                  <h3>Harry Steve</h3>
                  <span>Web Developer</span>
                  <i className="bx bx-share-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
