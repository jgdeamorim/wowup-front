"use client";
  
import React from "react";
import Image from "next/image";

const TeamStyleOne: React.FC = () => {
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
                    src="/images/team/team1.jpg"
                    alt="image"
                    width={660}
                    height={650}
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
                    src="/images/team/team2.jpg"
                    alt="image"
                    width={660}
                    height={650}
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
                    src="/images/team/team3.jpg"
                    alt="image"
                    width={660}
                    height={650}
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
                    src="/images/team/team4.jpg"
                    alt="image"
                    width={660}
                    height={650}
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

export default TeamStyleOne;
