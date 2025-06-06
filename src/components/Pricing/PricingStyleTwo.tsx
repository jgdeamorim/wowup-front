"use client";
  
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";

const PricingStyleTwo: React.FC = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-70 bg-f4f5fe">
        <div className="container">
          <div className="section-title">
            <h2>Choose The Pricing Plan</h2>
          </div>

          <div className="pricing-list-tab">
            <Tabs>
              <TabList>
                <Tab>
                  <i className="bx bxs-calendar-check"></i> Monthly
                </Tab>
                <Tab>
                  <i className="bx bxs-calendar-check"></i> Yearly
                </Tab>
              </TabList>

              <TabPanel>
                <div className="row justify-content-center">
                  {/* Single pricing table */}
                  <div className="col-lg-4 col-sm-6">
                    <div className="single-pricing-table center-align">
                      <div className="pricing-header">
                        <h3>Free</h3>
                      </div>

                      <div className="price">
                        <sup>$</sup>0 <sub>/ monthly</sub>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Up to 3 chat operators
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          100 ChatBot Triggers
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          24/7 Live Chat
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Email Integration
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Messenger Integration
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Visitor Info
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Mobile + Desktop Apps
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Quick Responses
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i> Drag & Drop
                          Widgets
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Visitor Notes
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i> Google
                          Analytics
                        </li>
                      </ul>

                      <div className="btn-box">
                        <Link href="/login" className="default-btn">
                          <i className="bx bxs-hot"></i>
                          Try It Free Now <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Single pricing table */}
                  <div className="col-lg-4 col-sm-6">
                    <div className="single-pricing-table center-align">
                      <div className="pricing-header">
                        <h3>Starter</h3>
                      </div>

                      <div className="price">
                        <sup>$</sup>49 <sub>/ monthly</sub>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Up to 4 chat operators
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          150 ChatBot Triggers
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          24/7 Live Chat
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Email Integration
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Messenger Integration
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Visitor Info
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Mobile + Desktop Apps
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Quick Responses
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i> Drag & Drop
                          Widgets
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Visitor Notes
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Google Analytics
                        </li>
                      </ul>

                      <div className="btn-box">
                        <Link href="/login" className="default-btn">
                          <i className="bx bxs-hot"></i>
                          Try It Free Now <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Single pricing table */}
                  <div className="col-lg-4 col-sm-6">
                    <div className="single-pricing-table center-align">
                      <div className="pricing-header">
                        <h3>Professional</h3>
                      </div>

                      <div className="price">
                        <sup>$</sup>79<sub> / monthly</sub>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Up to 5 chat operators
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          200 ChatBot Triggers
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          24/7 Live Chat
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Email Integration
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Messenger Integration
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Visitor Info
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Mobile + Desktop Apps
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Quick Responses
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Drag & Drop Widgets
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Visitor Notes
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Google Analytics
                        </li>
                      </ul>

                      <div className="btn-box">
                        <Link href="/login" className="default-btn">
                          <i className="bx bxs-hot"></i>
                          Try It Free Now <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row justify-content-center">
                  {/* Single pricing table */}
                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-table center-align">
                      <div className="pricing-header">
                        <h3>Free</h3>
                      </div>

                      <div className="price">
                        <sup>$</sup>0 <sub>/ yearly</sub>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Up to 5 chat operators
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          150 ChatBot Triggers
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          24/7 Live Chat
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Email Integration
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Messenger Integration
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Visitor Info
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Mobile + Desktop Apps
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Quick Responses
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Drag & Drop Widgets
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Visitor Notes{" "}
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Google Analytics
                        </li>
                      </ul>

                      <div className="btn-box">
                        <Link href="/login" className="default-btn">
                          <i className="bx bxs-hot"></i>
                          Try It Free Now <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Single pricing table */}
                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-table center-align">
                      <div className="pricing-header">
                        <h3>Starter</h3>
                      </div>

                      <div className="price">
                        <sup>$</sup>79 <sub>/ yearly</sub>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Up to 6 chat operators
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          200 ChatBot Triggers
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          24/7 Live Chat
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Email Integration
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Messenger Integration
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Visitor Info
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Mobile + Desktop Apps
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Quick Responses
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Drag & Drop Widgets
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Visitor Notes
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Google Analytics
                        </li>
                      </ul>

                      <div className="btn-box">
                        <Link href="/login" className="default-btn">
                          <i className="bx bxs-hot"></i>
                          Try It Free Now <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Single pricing table */}
                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-table center-align">
                      <div className="pricing-header">
                        <h3>Professional</h3>
                      </div>

                      <div className="price">
                        <sup>$</sup>99 <sub>/ yearly</sub>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Up to 7 chat operators
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          250 ChatBot Triggers
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          24/7 Live Chat
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Email Integration
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Messenger Integration
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Visitor Info
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Mobile + Desktop Apps
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Quick Responses
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Drag & Drop Widgets
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Visitor Notes
                          <span
                            className="tooltips bx bxs-info-circle"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Tight pants next level keffiyeh you probably haven't heard of them."
                          ></span>
                        </li>
                        <li>
                          <i className="bx bxs-badge-check"></i>
                          Google Analytics
                        </li>
                      </ul>

                      <div className="btn-box">
                        <Link href="/login" className="default-btn">
                          <i className="bx bxs-hot"></i>
                          Try It Free Now <span></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingStyleTwo;
