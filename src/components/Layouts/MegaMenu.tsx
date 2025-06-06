"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MegaMenu: React.FC = () => {
  const currentRoute = usePathname(); 
  return (
    <>
      <li className="nav-item">
        <Link href="#" className="nav-link" onClick={(e) => e.preventDefault()}>
          Home <i className="bx bx-chevron-down"></i>
        </Link>

        <ul className="dropdown-menu mega-dropdown-menu">
          <li className="nav-item">
            <h3>With Animation</h3>

            <Link
              href="/"
              className={`nav-link ${currentRoute == "/" && "active"}`}
            >
              Home One (IT Startup)
            </Link>

            <Link
              href="/index-it-2/"
              className={`nav-link ${
                currentRoute == "/index-it-2/" && "active"
              }`}
            >
              Home Two (IT Startup)
            </Link>

            <Link
              href="/index-it-3/"
              className={`nav-link ${
                currentRoute == "/index-it-3/" && "active"
              }`}
            >
              Home Three (IT Startup)
            </Link>

            <Link
              href="/index-saas/"
              className={`nav-link ${
                currentRoute == "/index-saas/" && "active"
              }`}
            >
              Home Four (SaaS Startup)
            </Link>

            <Link
              href="/index-chatbot/"
              className={`nav-link ${
                currentRoute == "/index-chatbot/" && "active"
              }`}
            >
              Home Five (Chatbot)
            </Link>

            <Link
              href="/index-chatbot-2/"
              className={`nav-link ${
                currentRoute == "/index-chatbot-2/" && "active"
              }`}
            >
              Home Six (Chatbot)
            </Link>

            <Link
              href="/index-chatbot-3/"
              className={`nav-link ${
                currentRoute == "/index-chatbot-3/" && "active"
              }`}
            >
              Home Seven (Chatbot)
            </Link>

            <Link
              href="/index-digital-marketing/"
              className={`nav-link ${
                currentRoute == "/index-digital-marketing/" && "active"
              }`}
            >
              Home Eight (Digital Marketing)
              <span className="new">New</span>
            </Link>
          </li>

          <li className="nav-item">
            <h3>Without Animation</h3>

            <Link
              href="/without-animation"
              className={`nav-link ${
                currentRoute == "/without-animation/" && "active"
              }`}
            >
              Home One (IT Startup)
            </Link>

            <Link
              href="/without-animation/index-it-2/"
              className={`nav-link ${
                currentRoute == "/without-animation/index-it-2/" && "active"
              }`}
            >
              Home Two (IT Startup)
            </Link>

            <Link
              href="/without-animation/index-it-3/"
              className={`nav-link ${
                currentRoute == "/without-animation/index-it-3/" && "active"
              }`}
            >
              Home Three (IT Startup)
            </Link>

            <Link
              href="/without-animation/index-saas/"
              className={`nav-link ${
                currentRoute == "/without-animation/index-saas/" && "active"
              }`}
            >
              Home Four (SaaS Startup)
            </Link>

            <Link
              href="/without-animation/index-chatbot/"
              className={`nav-link ${
                currentRoute == "/without-animation/index-chatbot/" && "active"
              }`}
            >
              Home Five (Chatbot)
            </Link>

            <Link
              href="/without-animation/index-chatbot-2/"
              className={`nav-link ${
                currentRoute == "/without-animation/index-chatbot-2/" &&
                "active"
              }`}
            >
              Home Six (Chatbot)
            </Link>

            <Link
              href="/without-animation/index-chatbot-3/"
              className={`nav-link ${
                currentRoute == "/without-animation/index-chatbot-3/" &&
                "active"
              }`}
            >
              Home Seven (Chatbot)
            </Link>

            <Link
              href="/without-animation/index-digital-marketing/"
              className={`nav-link ${
                currentRoute == "/without-animation/index-digital-marketing/" &&
                "active"
              }`}
            >
              Home Eight (Digital Marketing)
              <span className="new">New</span>
            </Link>
          </li>
        </ul>
      </li>
    </>
  );
};

export default MegaMenu;
