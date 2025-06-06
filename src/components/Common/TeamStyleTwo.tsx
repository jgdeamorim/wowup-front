"use client";
  
import React from "react";
import Image from "next/image";

const TeamStyleTwo: React.FC = () => {
  return (
    <>
      <div className="team-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our experts always ready to help you</h2>
          </div>

          <div className="row">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team/team5.jpg"
                    alt="image"
                    width={580}
                    height={580}
                  />

                  <ul className="social">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="content">
                  <h3>Alex Maxwel</h3>
                  <span>CEO & Founder</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team/team6.jpg"
                    alt="image"
                    width={580}
                    height={580}
                  />

                  <ul className="social">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="content">
                  <h3>Sarah Taylor</h3>
                  <span>UX/UI Designer</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team/team7.jpg"
                    alt="image"
                    width={580}
                    height={580}
                  />

                  <ul className="social">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="content">
                  <h3>Lee Munroe</h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-team-box">
                <div className="image">
                  <Image
                    src="/images/team/team8.jpg"
                    alt="image"
                    width={580}
                    height={580}
                  />

                  <ul className="social">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="content">
                  <h3>Calvin Klein</h3>
                  <span>Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamStyleTwo;
