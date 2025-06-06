"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./MegaMenu";
import MenuItem from "./MenuItem";
import { menus } from "../../../libs/menus";

const NavbarTwo: React.FC = () => {
  const [menu, setMenu] = useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area bg-white">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={118}
                  height={40}
                />
              </Link>

              {/* Toggle navigation */}
              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                  <MegaMenu />

                  {menus.map((menuItem) => (
                    <MenuItem key={menuItem.label} {...menuItem} />
                  ))}
                </ul>
              </div>

              <div className="others-options ms-auto">
                <Link href="/contact" className="default-btn mr-3">
                  <i className="bx bxs-hot"></i> Get Started <span></span>
                </Link>

                <Link href="/login" className="default-btn black-btn">
                  <i className="bx bx-log-in"></i> Log In <span></span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarTwo;
