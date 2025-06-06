"use client";
  
import React from "react";

interface PageTitleProps {
  pageTitle: string;
  pageDescription: string;
}

const PageTitleArea: React.FC<PageTitleProps> = ({ pageTitle, pageDescription }) => {
  return (
    <>
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>{pageTitle}</h2>
            <p>{pageDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTitleArea;

