"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/white-logo.png"
                      alt="image"
                      width={118}
                      height={40}
                    />
                  </Link>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <h3>Company</h3>

                <ul className="services-list">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/features">Features</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Our Pricing</Link>
                  </li>
                  <li>
                    <Link href="/blog">Latest News</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <h3>Support</h3>

                <ul className="support-list">
                  <li>
                    <Link href="/faq">FAQ's</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Community</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <h3>Contact Info</h3>

                <ul className="footer-contact-info">
                  <li>
                    Location: <span>6th Floor, Elegant Tower, York, USA</span>
                  </li>
                  <li>
                    Email: <span>hello@hepro.com</span>
                  </li>
                  <li>
                    Phone: <span>+0 (321) 984 754</span>
                  </li>
                </ul>

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
            </div>
          </div>

          <div className="copyright-area">
            <p>
              Copyright &copy; {currentYear} Hepro. Designed by{" "}
              <a href="http://envytheme.com/" target="_blank">
                EnvyTheme
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
