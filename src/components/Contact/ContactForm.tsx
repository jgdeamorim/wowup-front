"use client";

import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="contact-form">
      <h3>Let's Start Your Free Trial</h3>

      <form>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-control"
                required
              />
            </div>
          </div>
          
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="number"
                placeholder="Phone number"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <textarea
                name="text"
                cols={30}
                rows={6}
                placeholder="Your Message"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="col-lg-12 col-sm-12 text-center">
            <button type="submit" className="default-btn">
              <i className="bx bxs-paper-plane"></i>
              Send Message <span></span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
