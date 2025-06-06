"use client";
  
import React from "react";
import Image from "next/image";

const OurLovingClientsTwo: React.FC = () => {
  return (
    <>
      <div className="our-loving-clients ptb-100 bg-color-f8fbfa">
        <div className="container">
          <div className="section-title">
            <h2>Our Loving Clients</h2>
          </div>

          <div className="clients-logo-list align-items-center">
            <div className="single-clients-logo">
              <a href="#" target="_blank">
                <Image
                  src="/images/clients/client1.png"
                  alt="image"
                  width={130}
                  height={85}
                />
              </a>
            </div>

            <div className="single-clients-logo">
              <a href="#" target="_blank">
                <Image
                  src="/images/clients/client2.png"
                  alt="image"
                  width={130}
                  height={85}
                />
              </a>
            </div>

            <div className="single-clients-logo">
              <a href="#" target="_blank">
                <Image
                  src="/images/clients/client3.png"
                  alt="image"
                  width={130}
                  height={85}
                />
              </a>
            </div>

            <div className="single-clients-logo">
              <a href="#" target="_blank">
                <Image
                  src="/images/clients/client4.png"
                  alt="image"
                  width={130}
                  height={85}
                />
              </a>
            </div>

            <div className="single-clients-logo">
              <a href="#" target="_blank">
                <Image
                  src="/images/clients/client5.png"
                  alt="image"
                  width={130}
                  height={85}
                />
              </a>
            </div>

            <div className="single-clients-logo">
              <a href="#" target="_blank">
                <Image
                  src="/images/clients/client6.png"
                  alt="image"
                  width={130}
                  height={85}
                />
              </a>
            </div>

            <div className="single-clients-logo">
              <a href="#" target="_blank">
                <Image
                  src="/images/clients/client7.png"
                  alt="image"
                  width={130}
                  height={85}
                />
              </a>
            </div>

            <div className="single-clients-logo">
              <a href="#" target="_blank">
                <Image
                  src="/images/clients/client8.png"
                  alt="image"
                  width={130}
                  height={85}
                />
              </a>
            </div>

            <div className="single-clients-logo">
              <a href="#" target="_blank">
                <Image
                  src="/images/clients/client9.png"
                  alt="image"
                  width={130}
                  height={85}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurLovingClientsTwo;
