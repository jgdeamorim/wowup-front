"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const SignupForm: React.FC = () => {
  return (
    <>
      <div className="signup-area">
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <div className="signup-image">
              <Image
                src="/images/signup-bg.jpg"
                alt="image"
                width={1200}
                height={1400}
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 p-0">
            <div className="signup-content">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="signup-form">
                    <div className="logo">
                      <Link href="/">
                        <Image
                          src="/images/logo.png"
                          alt="image"
                          width={118}
                          height={40}
                        />
                      </Link>
                    </div>

                    <h3>Open up your Strax Account now</h3>
                    <p>
                      Already signed up? <Link href="/login">Log in</Link>
                    </p>

                    <form>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Your email address"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Create a password"
                          className="form-control"
                        />
                      </div>

                      <button type="submit" className="default-btn">
                        <i className="bx bx-log-in"></i>
                        Sign Up
                        <span></span>
                      </button>

                      {/* Connect with social links */}
                      <div className="connect-with-social">
                        <span>Or</span>

                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="bx bxl-facebook"></i>
                          Connect with Facebook
                        </a>

                        <a
                          href="https://mail.google.com/"
                          target="_blank"
                          className="google"
                        >
                          <i className="bx bxl-google"></i>
                          Connect with Google
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
