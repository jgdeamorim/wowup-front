"use client";
  
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import FunFactsTwo from "./FunFactsTwo";
import Image from "next/image";

const WhyChooseUsTwo: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <section className="video-presentation-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Why choose us to watch this video know more</h2>
          </div>

          <div className="video-box">
            <Image
              src="/images/video-bg.jpg"
              className="main-image"
              alt="image"
              width={950}
              height={630}
            />

            <div onClick={() => setToggler(!toggler)} className="video-btn">
              <i className="bx bx-play"></i>
            </div>

            {/* Shape Images */}
            <div className="shape1">
              <Image
                src="/images/shape/shape1.png"
                alt="image"
                width={90}
                height={90}
              />
            </div>
            <div className="shape2">
              <Image
                src="/images/shape/shape2.png"
                alt="image"
                width={119}
                height={119}
              />
            </div>
            <div className="shape3">
              <Image
                src="/images/shape/shape3.png"
                alt="image"
                width={120}
                height={120}
              />
            </div>
            <div className="shape4">
              <Image
                src="/images/shape/shape4.png"
                alt="image"
                width={159}
                height={159}
              />
            </div>
            <div className="shape5">
              <Image
                src="/images/shape/shape5.png"
                alt="image"
                width={190}
                height={190}
              />
            </div>
            <div className="shape6">
              <Image
                src="/images/shape/shape6.png"
                alt="image"
                width={41}
                height={41}
              />
            </div>
          </div>

          {/* Fun Facts Style Two */}
          <FunFactsTwo />

          <div className="contact-cta-box">
            <h3>Have any questions about us?</h3>
            <p>Don't hesitate to contact us.</p>

            <Link href="/contact" className="default-btn">
              <i className="bx bxs-edit-alt"></i>
              Contact Us
              <span></span>
            </Link>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-map1">
          <Image src="/images/map1.png" alt="image" width={910} height={443} />
        </div>
        <div className="shape7">
          <Image
            src="/images/shape/shape7.png"
            alt="image"
            width={106}
            height={55}
          />
        </div>
        <div className="shape8">
          <Image
            src="/images/shape/shape8.png"
            alt="image"
            width={44}
            height={44}
          />
        </div>
        <div className="shape9">
          <Image
            src="/images/shape/shape9.png"
            alt="image"
            width={90}
            height={90}
          />
        </div>
      </section>
    </>
  );
};

export default WhyChooseUsTwo;
